<template>
  <div id="app" :style="{ background }">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html,
body {
  overflow-x: hidden;
}
body {
  margin: 0;
}
#app {
  font-family: "Hind", sans-serif;
  color: #2c3e50;
  display: flex;
}
</style>


<script>
import Shake from "shake.js";
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["background"]),
    ...mapGetters(["isMobile"])
  },
  mounted: function() {
    this.$store.dispatch("init");

    if (this.isMobile) {
      var myShakeEvent = new Shake({
        threshold: 10
      });
      myShakeEvent.start();
      window.addEventListener(
        "shake",
        () => {
          this.$store.dispatch("setRandomId");
        },
        false
      );
    }
  }
};
</script>
