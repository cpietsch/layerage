<template>
  <div class="container">
    <div>
      <label for="id">Layer id</label>
      <input type="number" name="id" v-model.lazy="$store.state.id" />
    </div>  
    <div>
      <label for="width">Width</label>
      <input type="number" name="width" v-model.lazy="$store.state.width" />
    </div>  
    <div>
      <label for="height">Height</label>
      <input type="number" name="height" v-model.lazy="$store.state.height" />
    </div>  
    <div>
      <label for="background">Background</label>
      <input type="color" name="background" class="color" v-model="$store.state.background" />
    </div>  
    <div>
      <label for="size">How many</label>
      <input type="range" min="1" max="4000"  name="size" v-model.lazy="$store.state.size" />
    </div>
    <div>
      <label for="size">Size</label>
      <input type="range" min="0" max="1" step="0.01" name="scale" v-model="$store.state.scale" />
    </div>
    <div>
      made by <a href="https://twitter.com/chrispiecom" target="_blank">Christopher Pietsch</a> still super alpha v004
      rightclick save image as
    </div>
    <!-- <button type="submit" @click="submit" class="button">Generate</button> -->
    <!-- <button class="button lucky" @click="random">?!</button> -->

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "settings",
  components: {
  },
  methods: {
    submit: function(e) {
      console.log("submit", this.id);
      e.preventDefault();
      //this.$router.push("/" + this.id);
    },
    random: function(e) {
      // console.log("random");
      const id = this.data[parseInt(Math.random() * this.data.length)].layerId;
      // this.$store.dispatch("setId", id);
      this.$router.push("/" + id);
      e.preventDefault();
    }
  },
  computed: {
    ...mapGetters(["data", "item"]),
    ...mapState(["loaded", "size"])
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
  width: 230px;
  font-size: 14px;
  position: absolute;
  background: #ffffffeb;
}

.container>div {
  padding-bottom: 1em;
}
label {
  width: 100px;
  display:inline-block;
}
  
  input {
    font-size: 15px;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 1em;
    display: inline-flex;
    width: 100px;
    text-align: center;
  }
  .color {
    /*padding: 0;
    height: 1.6em;*/
  }

  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type="number"] {
      -moz-appearance: textfield;
  }
</style>
