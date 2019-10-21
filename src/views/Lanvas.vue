<template>
  <div class="canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";
import { global } from "../utils.js";

export default {
  name: "lanvas",
  methods: {
    download: function(el) {
      // download(this.$refs.canvas, "layers.png");
    },
    draw: function() {
      this.$refs.canvas.width = this.width;
      this.$refs.canvas.height = this.height;
      this.context.fillStyle = this.background;
      this.context.fillRect(0, 0, this.width, this.height);

      const radius = imageDim * this.scale;
      console.log(radius, this.scale);
      if (this.points) {
        for (const p of this.points) {
          // console.log(this.scale)
          this.context.drawImage(
            p.image,
            p.px * scale - radius / 2,
            p.py * scale - radius / 2,
            radius,
            radius
          );
        }
      }
    }
  },
  computed: {
    ...mapGetters(["images", "item", "siblingsFiltered"]),
    ...mapState(["width", "height", "background", "scale"]),
    context: function() {
      return this.$refs.canvas.getContext("2d");
    },
    points: function() {
      // console.time("calculate");
      // const p = calculate({
      //   images: this.images,
      //   width: this.width,
      //   height: this.height
      // })
      // console.timeEnd("calculate")

      const p = calculate({
        images: this.images,
        width: this.width,
        height: this.height
      });

      return this.images.map((d, i) => ({ ...d, px: p[i][0], py: p[i][1] }));
    }
  },
  watch: {
    siblingsFiltered: {
      handler: function(route) {
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
    points: function(points) {
      console.log(points);
      this.draw();
    }
    // imagess: function(images) {
    //   if (!images.length) return;
    //   console.log(images);
    //   console.time("calculate")
    //   const p = calculate({
    //     images: this.images,
    //     width: this.width,
    //     height: this.height
    //   })
    //   console.timeEnd("calculate")
    //   console.log(p)
    // }
  },
  mounted: function() {
    // this.$store.dispatch("loadImages")
    global.canvas = this.$refs.canvas;
  }
};

const scale = 10;
const imageDim = 128;

function calculate({ images, width, height }) {
  const extent = [d3.extent(images, d => +d.x), d3.extent(images, d => +d.y)];
  const x = d3
    .scaleLinear()
    .domain(extent[0])
    .range([0, width / scale]);
  const y = d3
    .scaleLinear()
    .domain(extent[1])
    .range([0, height / scale]);
  const points = d3.merge(images.map(d => [x(d.x), y(d.y)]));
  const n = points.length;
  console.log(points);
  const delaunay = new Delaunay(points);
  const omega = 1;
  const out = images.map(d => [0, 0]);

  for (let i = 0; i < 1000; ++i) {
    const voronoi = delaunay.voronoi([0, 0, width / scale, height / scale]);

    for (let i = 0; i < n; i += 2) {
      const cell = voronoi.cellPolygon(i >> 1);
      if (cell === null) continue;
      const x0 = points[i],
        y0 = points[i + 1];
      const [x1, y1] = d3.polygonCentroid(cell);

      (points[i] = x0 + (x1 - x0) * omega),
        (points[i + 1] = y0 + (y1 - y0) * omega);

      out[i >> 1][0] = x1;
      out[i >> 1][1] = y1;
    }
    delaunay.update();
  }
  return out;
}

function calculateEasy({ images, width, height }) {
  const extent = [d3.extent(images, d => +d.x), d3.extent(images, d => +d.y)];
  const x = d3
    .scaleLinear()
    .domain(extent[0])
    .range([0, width / scale]);
  const y = d3
    .scaleLinear()
    .domain(extent[1])
    .range([0, height / scale]);

  return images.map(d => [x(d.x), y(d.y)]);
}
</script>

<style scoped>
canvas {
  /*width: 100vw;*/
}
.credits a {
  display: block;
}
</style>
