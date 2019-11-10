import { scaleLinear } from "d3-scale";
import { extent, merge } from "d3-array";
import { polygonCentroid } from "d3-polygon";
import { Delaunay } from "d3-delaunay";

const internalScale = 10;
let delaunay = null;

function calculate(items, width, height) {
  console.log("calculate");
  const extents = [extent(items, d => d[0]), extent(items, d => d[1])];
  const x = scaleLinear()
    .domain(extents[0])
    .range([0, width / internalScale]);
  const y = scaleLinear()
    .domain(extents[1])
    .range([0, height / internalScale]);
  const points = merge(items.map(d => [x(d[0]), y(d[1])]));
  const n = points.length;
  // console.log(points);
  delaunay = null;
  delaunay = new Delaunay(points);
  const omega = 1;
  const out = items.map(d => [
    x(d[0]) * internalScale,
    y(d[1]) * internalScale
  ]);
  let now = Date.now();

  for (let i = 0; i < 2000; ++i) {
    const voronoi = delaunay.voronoi([
      0,
      0,
      width / internalScale,
      height / internalScale
    ]);

    for (let i = 0; i < n; i += 2) {
      const cell = voronoi.cellPolygon(i >> 1);
      if (cell === null) continue;
      const x0 = points[i],
        y0 = points[i + 1];
      const [x1, y1] = polygonCentroid(cell);

      (points[i] = x0 + (x1 - x0) * omega),
        (points[i + 1] = y0 + (y1 - y0) * omega);

      out[i >> 1][0] = parseInt(x1 * internalScale);
      out[i >> 1][1] = parseInt(y1 * internalScale);
    }

    delaunay.update();

    if (Date.now() - now > 16) {
      now = Date.now();
      postMessage({ type: "points", points: out });
    }
  }
  return out;
}

// function Timeout(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

onmessage = function(e) {
  // console.log("worker here", e.data);
  if (e.data && e.data.type === "calculate") {
    const { data, width, height } = e.data;
    // console.log(data, width, height);
    calculate(data, width, height);
  }
  if (e.data && e.data.type === "find" && delaunay) {
    const { x, y } = e.data;
    // console.log(x, y);
    const index = delaunay.find(x / internalScale, y / internalScale);
    postMessage({ type: "find", index: index });
  }
  // postMessage(e.data);
};
