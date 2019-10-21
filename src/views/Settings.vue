<template>
  <div class="container">
    <div>
      <label for="id">
        Layer id
        <span @click="random">🎲</span>
      </label>
      <input type="number" name="id" :value="$store.state.id" @change="updateId" />
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
    <div class="colorBox">
      <chrome :value="$store.state.background" @input="updateBackground" :disableFields="true" />
    </div>
    <div>
      <label for="size">How many</label>
      <input type="range" min="1" max="4000" name="size" v-model.lazy="$store.state.size" />
    </div>
    <div>
      <label for="size">Size</label>
      <input type="range" min="0" max="1" step="0.01" name="scale" v-model="$store.state.scale" />
    </div>
    <div>
      tool by
      <a href="https://twitter.com/chrispiecom" target="_blank">chrispie</a>
      images by redditors of
      <a href="https://reddit.com/r/layer" target="_blank">/r/layer</a>
    </div>
    <div>
      <!-- <a id="download" download="layers.png" :href="dataUrl"> -->
      <button type="button" @click="download">Download</button>
      <!-- </a> -->
    </div>
    <!-- <button type="submit" @click="submit" class="button">Generate</button> -->
    <!-- <button class="button lucky" @click="random">?!</button> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { global } from "../utils.js";
import { Chrome } from "vue-color";
import { saveAs } from "file-saver";

export default {
  name: "settings",
  data: function() {
    return {
      dataUrl: ""
    };
  },
  components: { Chrome },
  methods: {
    download: async function(e) {
      const blob = await canvas2png(global.canvas);
      saveAs(blob, "layer.png");
      // const url = URL.createObjectURL(blob);
      // this.dataUrl = url;
      // const data = global.canvas.toDataURL("image/png");
      // this.dataUrl = data;
      // console.log(data.length);
      // await new Promise(requestAnimationFrame);
      // URL.revokeObjectURL(url);
      // this.dataUrl = "";
      // const url = global.canvas
      //   .toDataURL("image/png")
      //   .replace("image/png", "image/octet-stream");
      // console.log(url);
    },
    updateId: function(e) {
      // console.log(e.target.value);
      // this.$store.dispatch("setId", e.target.value);
      const id = e.target.value;
      this.$router.push("/" + id);
    },
    updateBackground: function(color) {
      // console.log(color.hex);
      this.$store.state.background = color.hex;
    },
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

async function canvas2png(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve));
}
</script>

<style scoped>
.container {
  padding: 20px;
  width: 230px;
  font-size: 14px;
  position: absolute;
  background: #ffffffeb;
  right: 0;
}

.container > div {
  padding-bottom: 1em;
}
label {
  width: 100px;
  display: inline-block;
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
  padding: 0;
  height: 1.6em;
  width: 110px;
}

.colorBox {
  /* margin-top: 5px; */
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
