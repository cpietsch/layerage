<template>
  <div class="container">
    <div v-if="loaded.data && item">
      <loading />
      <settings />
      <background-canvas />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import BackgroundCanvas from "./BackgroundCanvas.vue";
import Settings from "./Settings.vue";
import Loading from "./Loading.vue";
export default {
  name: "container",
  components: {
    BackgroundCanvas,
    Settings,
    Loading
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
    ...mapGetters(["item"]),
    ...mapState(["loaded"])
  },
  mounted: function() {
    // this.$store.dispatch("loadImages")
  }
};
</script>

<style scoped>
.credits {
  margin-top: 100px;
  display: flex;
  flex-flow: wrap;
  font-size: 10px;
  text-decoration: none;
}
</style>
