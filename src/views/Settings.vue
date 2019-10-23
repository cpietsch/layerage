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
      <!-- <input type="color" name="background" class="color" v-model="$store.state.background" /> -->
      <div
        class="colorField"
        :style="{ background: $store.state.background}"
        @click="openColor = !openColor"
      />
    </div>
    <div class="colorBox" v-if="openColor">
      <chrome :value="$store.state.background" @input="updateBackground" :disableFields="true" />
    </div>
    <div>
      <label for="size">{{ tooltipNum ? tooltipNum + ' Layers' : 'How many' }}</label>
      <input
        type="range"
        min="1"
        max="3000"
        name="size"
        @input="tooltipNum = $event.target.value"
        @change="tooltipNum = null, $store.state.size = $event.target.value"
        :value="tooltipNum ? tooltipNum : $store.state.size"
      />
    </div>
    <div>
      <label for="size">{{ tooltipSize }}</label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        name="scale"
        @input="tooltipSize = $event.target.value"
        @change="tooltipSize = 'Size'"
        v-model="$store.state.scale"
      />
    </div>

    <div>
      <!-- <a id="download" download="layers.png" :href="dataUrl"> -->
      <button type="button" @click="download" class="download">Save Background</button>
      <!-- </a> -->
    </div>
    <div class="credits">
      images by redditors of
      <a href="https://reddit.com/r/layer" target="_blank">/r/layer</a>,
      tooling by
      <a href="https://twitter.com/chrispiecom" target="_blank">chrispie</a>
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
      dataUrl: "",
      openColor: false,
      tooltipSize: "Size",
      tooltipNum: null
    };
  },
  components: { Chrome },
  methods: {
    inputSize: function(e) {
      console.log(e.target.value);
    },
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

<style scoped lang="stylus">
.container {
  padding: 20px;
  width: 240px;
  font-size: 14px;
  position: absolute;
  background: #ffffffeb;
  right: 0;
  display: flex;
  flex-flow: column;
  user-select: none;
}

.container > div {
  padding-bottom: 1.2em;
}

label {
  width: 100px;
  display: inline-block;
}

input {
  font-size: 15px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 1em;
  display: inline-flex;
  width: 120px;
  text-align: center;
}

.color {
  padding: 0;
  height: 1.6em;
  width: 110px;
}

.colorField {
  width: 120px;
  padding: 5px;
  height: 15px;
  display: inline-flex;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.colorBox {
  /* margin-top: 5px; */
}

.credits {
  // font-size: 12px;
  line-height: 1.4em;
  color: #555;
}

.download {
  font-family: Consolas, Helvetica, Arial, sans-serif;
  font-size: 15px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: #ce76f7;
  color: #00000085;
  cursor: pointer;
  line-height: 1em;
  width: 100%;

  &:hover {
    color: #000000;
    background: #b05dd7;
  }
}

input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type='color']::-webkit-color-swatch {
  border: none;
}

input[type='number']::-webkit-outer-spin-button, input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='range'] {
  -webkit-appearance: none;
  background: none;
  border: none;
}

input[type='range']::-webkit-slider-runnable-track {
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type='range']::-ms-track {
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type='range']::-moz-range-track {
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #555;
  margin-top: -5px;
  position: relative;
}

input[type='range']::-ms-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #555;
  margin-top: -5px;
  position: relative;
}

input[type='range']::-moz-range-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #555;
  margin-top: -5px;
  position: relative;
}

input[type='range']:focus {
  outline: none;

  &::-webkit-slider-thumb:after {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: #eee;
    border-radius: 5px;
    color: #555;
    padding: 5px 10px;
    border: 2px solid #555;
  }

  &::-ms-thumb:after {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: #eee;
    border-radius: 5px;
    color: #555;
    padding: 5px 10px;
    border: 2px solid #555;
  }

  &::-moz-range-thumb:after {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: #eee;
    border-radius: 5px;
    color: #555;
    padding: 5px 10px;
    border: 2px solid #555;
  }
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

input[type='range']:focus::-ms-track {
  background: #ccc;
}

input[type='range']:focus::-moz-range-track {
  background: #ccc;
}
</style>
