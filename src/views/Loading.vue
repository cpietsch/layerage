<template>
  <div>
    <div class="loading" v-if="!loaded.data">loading data</div>
    <div class="loading images" v-if="!loaded.images" :style="style"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "container",
  computed: {
    ...mapState(["loaded", "size"]),
    style: function() {
      const width = parseInt((this.loaded.number / this.size) * 100);
      return `width: ${width}%`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.loading {
  position: absolute;
}

.images {
  height: 3px;
  background: #8bf9c5;
  left: 0;
  top: 0;
  transition: width 0.2s;
  z-index: 100;
}
</style>