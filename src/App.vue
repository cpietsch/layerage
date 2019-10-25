<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  font-family: Consolas, Helvetica, Arial, sans-serif;
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
export default {
  name: "App",
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
