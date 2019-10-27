import Vue from "vue";
import Vuex from "vuex";
import { csv } from "d3";
import router from "./router";
import { makeUrl, loadImage, global } from "./utils.js";

let data = [];
let imageMap = {};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaded: {
      data: false,
      images: false,
      number: 0
    },
    id: null,
    size: 200,
    images: [],
    width: Math.floor(window.screen.width * window.devicePixelRatio),
    height: Math.floor(window.screen.height * window.devicePixelRatio),
    // width: 800,
    // height: 600,
    background: "#FFFFFF",
    scale: 0.3,
    dataUrl: null
  },
  mutations: {},
  actions: {
    init: async function({ dispatch, commit, getters, state }) {
      console.log("init");
      data = await csv("dataBig.csv", d => ({
        ...d,
        x: +d.x,
        y: +d.y
      }));
      state.loaded.data = true;
      if (!state.id) dispatch("setRandomId");
    },
    loadImages: async function({ dispatch, commit, getters, state }) {
      console.log("loadImages");
      imageMap = {};
      state.images = [];

      const siblings = getters.siblingsFiltered;
      state.loaded.images = false;
      const batchSize = 20;
      const size = getters.siblingsFiltered.length;
      for (let i = 0; i < size; i += batchSize) {
        const num = Math.min(size - i, batchSize);
        const end = Math.min(size - i, batchSize) + i;
        // console.log(i, num)
        const loaded = await Promise.all(
          siblings
            .filter((d, ii) => ii >= i && ii < end)
            .map(d => loadImage(d.id))
        );
        // console.log(loaded)
        // loaded.forEach(l => l ? images.push(l) : '')
        loaded
          .filter(l => l)
          .forEach(l => {
            state.images.push(l.id);
            imageMap[l.id] = l.image;
          });
        // console.log(loaded);
        state.loaded.number = i;
      }
      // console.log(images)
      state.loaded.images = true;
      // return images;
    },
    setRandomId: function({ dispatch, getters }) {
      const id =
        getters.data[parseInt(Math.random() * getters.data.length)].layerId;
      dispatch("setId", id);
    },
    setId: function({ dispatch, commit, getters, state }, id) {
      console.log("id", id);
      // const item = getters.data.find(d => d.layerId === id)
      //if(item) state.id = id
      //else router.push("/")
      state.id = id;
    }
  },
  getters: {
    data: function(state) {
      return state.loaded.data ? data : [];
    },
    images: function(state) {
      return state.images.map(id => imageMap[id]);
    },
    // images: function(state) {
    //   return siblingsFiltered.map((d,i) => images[i])
    // },
    item: function(state, getters) {
      return getters.data.find(d => d.layerId === state.id);
    },
    siblingsFiltered: function(state, getters) {
      return getters.siblings.filter((d, i) => i < state.size).reverse();
    },
    siblings: function(state, getters) {
      const { x, y } = getters.item;
      // todo: use a quadtree for that
      return getters.data
        .map(d => {
          const distance = Math.hypot(d.x - x, d.y - y);
          return {
            ...d,
            distance
          };
        })
        .sort((a, b) => a.distance - b.distance);
    }
  }
});
