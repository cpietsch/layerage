import Vue from 'vue'
import Vuex from 'vuex'
import { csv } from 'd3'
import router from "./router";
import { makeUrl, loadImage } from "./utils.js"

let data = []
let images = []

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: {
      data: false,
      images: false,
      number: 0
    },
    id: null,
    size: 500
  },
  mutations: {

  },
  actions: {
    init: async function({ dispatch, commit, getters, state }) {
      console.log("init")
      data = await csv("dataBig.csv", d => ({ ...d, x: +d.x, y: +d.y}))
      state.loaded.data = true
    },
    loadImages: async function({ dispatch, commit, getters, state }) {
      console.log("loadImages")
      images = []
      state.loaded.images = false
      const batchSize = 40
      const size = getters.siblingsFiltered.length
      for(let i = 0; i < size; i+=batchSize){
        const num = Math.min(size-i,batchSize)
        const end = Math.min(size-i,batchSize)+i
        // console.log(i, num)
        const loaded = await Promise.all(
          getters.siblingsFiltered.filter((d,ii) => (ii>=i && ii<end)).map(loadImage)
        )
        // console.log(loaded)
        loaded.forEach(l => l ? images.push(l) : '')
        state.loaded.number = i
      }
      // console.log(images)
      state.loaded.images = true
    },
    setId: function({ dispatch, commit, getters, state }, id) {
      console.log("id", id)
      const item = getters.data.find(d => d.layerId === id)
      //if(item) state.id = id
      //else router.push("/")
      state.id = id
    },
  },
  getters: {
    data: function(state) {
      return state.loaded.data ? data : []
    },
    images: function(state) {
      return state.loaded.data && state.loaded.images ? images : []
    },
    item: function(state, getters) {
      return getters.data.find(d => d.layerId === state.id)
    },
    siblingsFiltered: function(state, getters){
      return getters.siblings.filter((d,i) => i < state.size)
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
    }
  }
})
