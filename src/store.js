import Vue from "vue";
import Vuex from "vuex";
import { csv } from "d3-fetch";
import router from "./router";
import { loadImage, dataUrl } from "./utils.js";

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
    idSelected: null,
    id: null,
    size: 200,
    images: [],
    width: Math.floor(window.screen.width * window.devicePixelRatio),
    height: Math.floor(window.screen.height * window.devicePixelRatio),
    background: "#FFFFFF",
    scale: 0.9,
    dataUrl: null
  },
  mutations: {},
  actions: {
    init: async function({ dispatch, commit, getters, state }) {
      console.log("init");
      state.loaded.data = false;
      data = await csv(dataUrl, d => ({
        ...d,
        x: +d.x,
        y: +d.y,
        title: d.url.split("/")[1].replace(/_/g, " ")
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
      state.loaded.number = 0;
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
        loaded.forEach(l => {
          // add them to the state
          state.images.push(l.id);
          imageMap[l.id] = l.image;
        });
        state.loaded.number = i;
      }
      state.loaded.images = true;
    },
    setRandomId: function({ dispatch, getters }, pushRoute) {
      const id =
        getters.data[parseInt(Math.random() * getters.data.length)].layerId;
      dispatch("setId", id);
      if (pushRoute) {
        router.push("/" + id);
      }
    },
    setId: function({ dispatch, commit, getters, state }, id) {
      console.log("id", id);
      // const item = getters.data.find(d => d.layerId === id);
      // if (item) state.id = id;
      // else router.push("/");
      state.id = id;
    }
  },
  getters: {
    isMobile: function(state) {
      return state.width / window.devicePixelRatio < 700;
    },
    data: function(state) {
      return state.loaded.data ? data : [];
    },
    images: function(state) {
      return state.images.map(id => imageMap[id]);
    },
    item: function(state, getters) {
      return getters.data.find(d => d.layerId === state.id);
    },
    siblingsFiltered: function(state, getters) {
      return getters.siblings.filter((d, i) => i < state.size).reverse();
    },
    siblings: function(state, getters) {
      const { x, y } = getters.item;
      // todo: use a quadtree for that or something more efficient
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
