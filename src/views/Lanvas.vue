<template>
  <div class="canvas">
    <canvas ref="canvas" @mousemove="mousemove" @click="click"></canvas>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { scaleLinear } from "d3-scale";
import { extent, merge } from "d3-array";
import { polygonCentroid } from "d3-polygon";
import { Delaunay } from "d3-delaunay";
import { global } from "../utils.js";
import Worker from "worker-loader!../layout.worker.js";

let worker = null;
const imageDim = 128;
let points = [];

export default {
  name: "lanvas",
  methods: {
    click: function(e) {
      if (this.$store.state.hover) {
        this.$router.push("/" + this.$store.state.hover);
        e.preventDefault();
      }
    },
    mousemove: function(e) {
      const xScale = this.width / window.innerWidth;
      const yScale = this.height / window.innerHeight;
      const scale = Math.max(xScale, yScale);
      const x = parseInt(e.x * xScale);
      const y = parseInt(e.y * xScale);
      // console.log(x, y);

      if (worker) {
        worker.postMessage({ type: "find", x, y });
      }
    },
    draw: function() {
      this.$refs.canvas.width = this.width;
      this.$refs.canvas.height = this.height;
      this.context.fillStyle = this.background;
      this.context.fillRect(0, 0, this.width, this.height);

      const radius = imageDim * this.scale;

      for (let index = 0; index < points.length; index++) {
        const p = points[index];

        if (this.images.length && this.images[index]) {
          this.context.drawImage(
            this.images[index],
            p[0] - radius / 2,
            p[1] - radius / 2,
            radius,
            radius
          );
        } else {
          this.context.rect(p[0], p[1], 4, 4);
        }
      }
      this.context.fillStyle = "black";
      this.context.fill();
    }
  },
  computed: {
    ...mapGetters(["images", "item", "siblingsFiltered"]),
    ...mapState(["width", "height", "background", "scale"]),
    context: function() {
      return this.$refs.canvas.getContext("2d");
    }
  },
  watch: {
    siblingsFiltered: {
      handler: function(items) {
        if (worker) {
          worker.terminate();
        }
        worker = new Worker();
        worker.onmessage = e => {
          if (e.data.type === "points") {
            points = e.data.points;
            this.draw();
          }
          if (e.data.type === "find") {
            const index = e.data.index;
            // console.log(index, points[index]);
            const id = this.siblingsFiltered[index].layerId;
            // console.log(index, id);
            this.$store.state.hover = id;
          }
        };

        const data = items.map(d => [d.x, d.y]);
        const { width, height } = this;
        worker.postMessage({ type: "calculate", data, width, height });

        this.$store.dispatch("loadImages");
      },
      immediate: true
    },
    background: function() {
      this.draw();
    },
    scale: function() {
      this.draw();
    },
    images: function(images) {
      this.draw();
    }
  },
  mounted: function() {
    // this.$store.dispatch("loadImages");
    global.canvas = this.$refs.canvas;
  }
};
</script>

<style scoped>
canvas {
  width: 100vw;
}
.credits a {
  display: block;
}
</style>
