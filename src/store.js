import Vue from 'vue'
import Vuex from 'vuex'
import { csv } from 'd3'
import router from "./router";

let data = []
let images = []

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: {
      data: false,
      images: false
    },
    id: null,
    size: 1000
  },
  mutations: {

  },
  actions: {
    init: async function({ dispatch, commit, getters, state }) {
      console.log("init")
      data = await csv("data.csv", d => ({ ...d, x: +d.x, y: +d.y}))
      state.loaded.data = true
      dispatch("random")
    },
    random: function({ dispatch, commit, getters, state }) {
      const id = getters.data[parseInt(Math.random()*getters.data.length)].id
      router.push("/" + id)
      console.log("random", state.id)
    },
    loadImages: async function({ dispatch, commit, getters, state }) {
      console.log("loadImages")
      state.loaded.images = false
      Promise.all(getters.siblings.map(loadImage))
        .then(values => {
          images = values.filter(d => d)
          state.loaded.images = true
        })
    }
  },
  getters: {
    data: function(state) {
      return state.loaded.data ? data : []
    },
    images: function(state) {
      return state.loaded.images ? images : []
    },
    item: function(state, getters) {
      return getters.data.find(d => d.id === state.id)
    },
    siblings: function(state, getters){
      const { x, y } = getters.item
      return getters.data.map(d => {
        const distance = Math.hypot(d.x - x, d.y - y)
        return {
          ...d,
          distance
        }
      })
      .sort((a,b)=> a.distance - b.distance)
      .filter((d,i) => i < state.size)
    }
  }
})


function makeUrl(id){ return `https://vikusviewer.fh-potsdam.de/layer/data/png/128c/${id}.png`; }

function loadImage(d) {
  return new Promise((resolve, error) => {
    const url = makeUrl(d.id);
    const image = new Image(); 
    image.onload = _ => resolve({...d, image})
    image.onerror = _ => resolve(null)
    image.src = url
  })
}