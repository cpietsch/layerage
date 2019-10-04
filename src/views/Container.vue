<template>
  <div class="container">
    <div v-if="!loaded.data">loading data</div>
    <div v-if="!loaded.images">loading images {{loaded.number}} / {{size}}</div>
    <div v-if="loaded.data && item">
      <lanvas />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Lanvas from "./Lanvas.vue";

export default {
  name: "container",
  components: {
    Lanvas
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
    ...mapGetters(["data", "item"]),
    ...mapState(["loaded", "size"])
  }
};
</script>

<style scoped></style>
