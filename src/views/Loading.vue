<template>
  <div>
    <div class="loading" v-if="!loaded.data">loading data</div>
    <div class="loading" v-if="!loaded.images">loading images {{loaded.number}} / {{size}}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "container",
  computed: {
    ...mapState(["loaded", "size"])
  }
};
</script>

<style lang="stylus" scoped>
.loading {
  position: absolute;
}
</style>