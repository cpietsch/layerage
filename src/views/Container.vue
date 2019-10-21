<template>
  <div class="container">
    <div v-if="!loaded.data">loading data</div>
    <div v-if="!loaded.images">loading images {{loaded.number}} / {{size}}</div>
    <div v-if="loaded.data && item">
      <settings />
      <lanvas :key="id"/>
      <div class="credits">
        <a
          v-for="s in siblingsFiltered"
          :href="'https://www.reddit.com/r/Layer/comments/' + s.url"
          target="_blank"
          :key="s.id"
          >{{ s.layerId }},</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Lanvas from "./Lanvas.vue";
import Settings from "./Settings.vue";

export default {
  name: "container",
  components: {
    Lanvas, Settings
  },
  methods: {},
  watch: {
    $route: {
      handler: function(route) {
        const { id } = route.params;
        this.$store.dispatch("setId", id);
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(["data", "item", "siblingsFiltered"]),
    ...mapState(["loaded", "size", "id"])
  },
  mounted: function(){
    // this.$store.dispatch("loadImages")
  }
};
</script>

<style scoped>
  .credits{
    margin-top: 100px;
    display: flex;
    flex-flow: wrap;
    font-size: 10px;
    text-decoration: none;
  }
</style>
