<template>
  <div class="canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";

export default {
  name: "lanvas",
  methods: {
    // draw: function() {
    //   draw(this.$refs.canvas, this.images);
    // }
  },
  computed: {
    ...mapGetters(["images", "item", "siblingsFiltered"]),
    ...mapState(["dimensions", "background", "size"]),
  },
  watch: {
    siblingsFiltered: function(items){
      console.log(items);
    },
    images: function(images) {
      if (!images.length) return;
      console.log(images);
      draw({
        canvas: this.$refs.canvas,
        images: this.images,
        radius: 128 / 3,
        width: this.dimensions.width,
        height: this.dimensions.height,
        background: this.background
      });
    },
    $route: function(params){
      //draw(this.$refs.canvas, this.images);
    }
  },
  mounted: function(){
    this.$store.dispatch("loadImages")
  }
};

async function draw({canvas, images, width, height, radius, background}) {
  console.log(canvas);
  const extent = [d3.extent(images, d => +d.x), d3.extent(images, d => +d.y)];
  // const width = 1920;
  // const height = 1080;
  const scale = 10
  const x = d3
    .scaleLinear()
    .domain(extent[0])
    .range([0, width/scale]);
  const y = d3
    .scaleLinear()
    .domain(extent[1])
    .range([0, height/scale]);
  const points = d3.merge(images.map(d => [x(d.x), y(d.y)]));
  const n = points.length;
  // const radius = 128 / 3;
  console.log(points);
  const delaunay = new Delaunay(points);
  const context = canvas.getContext("2d");
  const omega = 1;
  canvas.width = width;
  canvas.height = height;
  context.lineCap = "square";
  for (let i = 0; i < 1000; ++i) {
    const voronoi = delaunay.voronoi([0, 0, width/scale, height/scale]);
    context.beginPath();
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);
    //context.clearRect(0, 0, width, height);
    //context.beginPath();

    for (let i = 0; i < n; i += 2) {
      const cell = voronoi.cellPolygon(i >> 1);
      if (cell === null) continue;
      const x0 = points[i],
        y0 = points[i + 1];
      const [x1, y1] = d3.polygonCentroid(cell);
      //console.log(x1,y1)
      //context.beginPath();
      //console.log(i >> 1)
      const id = i >> 1;
      const entry = images[id];
      if (entry) {
        //let radius = ra2(entry.distance)
        context.drawImage(
          entry.image,
          x1*scale - radius / 2,
          y1*scale - radius / 2,
          radius,
          radius
        );
      }

      //context.fillRect(x0, y0, 2,2);
      //context.stroke();
      //context.moveTo(x0, y0);
      //context.lineTo(points[i] = x0 + (x1 - x0) * omega, points[i + 1] = y0 + (y1 - y0) * omega);
      points[i] = x0 + (x1 - x0) * omega,
      points[i + 1] = y0 + (y1 - y0) * omega;
    }
    //context.fill();

    //yield context.canvas;
    delaunay.update();
    //await animationFrame();
  }
}

function animationFrame() {
  let resolve = null;
  const promise = new Promise(r => (resolve = r));
  window.requestAnimationFrame(resolve);
  return promise;
}
</script>

<style scoped>
canvas {
  width: 100vw;
}
.credits a {
  display: block;
}
</style>
