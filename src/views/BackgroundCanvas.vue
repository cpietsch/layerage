<template>
  <div class="canvas">
    <canvas ref="canvas" @click="click"></canvas>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { global } from "../utils.js";
import Worker from "worker-loader!../layout.worker.js";

let worker = null;
const imageDim = 128;
let points = [];

export default {
  name: "background-canvas",
  methods: {
    startLayoutWorker: function(e) {
      this.makeWorker();
      const data = this.siblingsFiltered.map(d => [d.x, d.y]);
      const { width, height } = this;
      worker.postMessage({ type: "calculate", data, width, height });
    },
    click: function(e) {
      const xScale = this.width / window.innerWidth;
      const yScale = this.height / window.innerHeight;
      const scale = Math.max(xScale, 1);
      const x = parseInt(e.x * scale);
      const y = parseInt(e.y * scale);
      // console.log(x, y);

      if (worker) {
        worker.postMessage({ type: "find", x, y });
      }
    },
    makeWorker: function() {
      if (worker) {
        worker.terminate();
      }
      worker = new Worker();
      worker.onmessage = this.workerMessage;
    },
    workerMessage: function(e) {
      if (e.data.type === "points") {
        points = e.data.points;
        this.draw();
      }
      if (e.data.type === "find") {
        const index = e.data.index;
        const id = this.siblingsFiltered[index].layerId;
        this.$store.state.idSelected = id;
      }
    },
    draw: function() {
      // console.log("draw");
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
        this.startLayoutWorker();
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
    images: function() {
      this.draw();
    },
    width: function() {
      this.startLayoutWorker();
    },
    height: function() {
      this.startLayoutWorker();
    }
  },
  mounted: function() {
    global.canvas = this.$refs.canvas;
  },
  beforeDestroy: function() {
    if (worker) {
      worker.terminate();
    }
  }
};
</script>

<style scoped>
canvas {
  max-width: 100vw;
  cursor: pointer;
}
.credits a {
  display: block;
}
</style>
