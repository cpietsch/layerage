<template>
  <div class="home" v-if="$store.state.loaded.data">
    <button @click="$store.dispatch('random')">random</button>
    {{ data.length }}
    {{ item }}
    {{ siblings.length }}
    {{ images.length }}
    
    <br>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as d3 from 'd3'
import {Delaunay} from "d3-delaunay";

export default {
  name: 'home',
  components: {
    
  },
  computed: {
    ...mapGetters([
      'data',
      'item',
      'siblings',
      'images'
    ])
  },
  watch: {
    images: function(images){
      if(!images.length) return
      console.log(images)
      draw(this.$refs.canvas, images)
    },
    $route: {
      handler: function(route) {
        const { id } = route.params;
        if(!id) {
          return this.$store.dispatch("random")
        }
        console.log(id);
        this.$store.state.id = id;
        this.$store.dispatch("loadImages")
      },
      immediate: true
    }
  }
}

async function draw(canvas, images){
  console.log(canvas)
  const extent = [d3.extent(images, d => +d.x), d3.extent(images, d => +d.y)]
  const width = 1920*4;
  const height = 1080*4;
  const x = d3.scaleLinear().domain(extent[0]).range([0, width]);
  const y = d3.scaleLinear().domain(extent[1]).range([0, height]);
  const points = d3.merge(images.map(d => [x(d.x),y(d.y)]));
  const n = points.length
  const radius = 128;
  console.log(points)
  const delaunay = new Delaunay(points);
  const context = canvas.getContext('2d');
  const omega = 1
  canvas.width = width
  canvas.height = height
  context.lineCap = "square";
  for (let i = 0; i < 400; ++i) {
    const voronoi = delaunay.voronoi([0, 0, width, height]);
    context.beginPath();
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    //context.clearRect(0, 0, width, height);
    //context.beginPath();
    
    for (let i = 0; i < n; i += 2) {
      const cell = voronoi.cellPolygon(i >> 1);
      if (cell === null) continue;
      const x0 = points[i], y0 = points[i + 1];
      const [x1, y1] = d3.polygonCentroid(cell);
      //console.log(x1,y1)
      //context.beginPath();
      //console.log(i >> 1)
      const id = i >> 1
      const entry = images[id]
      if(entry) {
        //let radius = ra2(entry.distance)
        context.drawImage(entry.image, x1-radius/2,y1-radius/2, radius, radius) 
      }
     
      //context.fillRect(x0, y0, 2,2);
      //context.stroke();
      //context.moveTo(x0, y0);
      //context.lineTo(points[i] = x0 + (x1 - x0) * omega, points[i + 1] = y0 + (y1 - y0) * omega);
      points[i] = x0 + (x1 - x0) * omega,
      points[i + 1] = y0 + (y1 - y0) * omega
    }
    //context.fill();

    //yield context.canvas;
    delaunay.update();
    await animationFrame()
  }
}

function animationFrame() {
    let resolve = null
    const promise = new Promise(r => resolve = r)
    window.requestAnimationFrame(resolve)
    return promise
}
</script>


<style scoped>
  canvas {
    width: 100vw;
  }
</style>