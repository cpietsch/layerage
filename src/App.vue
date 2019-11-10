<template>
  <div id="app" :style="{ background }">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100%;
  width: 100%;
}
</style>


<script>
import Shake from "shake.js";
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["background"])
  },
  mounted: function() {
    this.$store.dispatch("init");

    var myShakeEvent = new Shake({
      threshold: 10
    });
    myShakeEvent.start();
    window.addEventListener(
      "shake",
      () => {
        // alert("shake");
        this.$store.dispatch("setRandomId");
      },
      false
    );
  }
};
</script>
