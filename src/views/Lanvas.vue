<template>
  <div class="canvas">
    <canvas ref="canvas"></canvas>
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
  // data: function() {
  //   return {
  //     worker: 0
  //   };
  // },
  methods: {
    draw: function() {
      // let devicePixelRatio = window.devicePixelRatio;
      // console.log(this.width);
      this.$refs.canvas.width = this.width;
      this.$refs.canvas.height = this.height;
      this.context.fillStyle = this.background;
      this.context.fillRect(0, 0, this.width, this.height);

      const radius = imageDim * this.scale;

      // console.log(this.images);

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

      // console.log("draw");
      // console.log(radius, this.scale);
      // if (this.points) {
      //   for (const p of this.points) {
      //     // console.log(this.scale)
      //     this.context.drawImage(
      //       p.image,
      //       p.px * scale - radius / 2,
      //       p.py * scale - radius / 2,
      //       radius,
      //       radius
      //     );
      //   }
      // }
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
          points = e.data;
          this.draw();
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
