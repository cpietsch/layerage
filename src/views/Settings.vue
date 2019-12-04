<template>
  <div class="container" @click="closeColor" :class="{ closed }">
    <div class="layerInfo" v-if="itemSelected">
      <div class="left">
        <a target="blank" :href="'https://www.reddit.com/r/Layer/comments/' + itemSelected.url">
          <img :src="layerUrl" />
        </a>
      </div>
      <div class="right">
        <div>{{ itemSelected.title }}</div>
        <div>{{ itemSelected.author }}</div>
        <router-link :to="'/' + itemSelected.layerId">
          {{
          itemSelected.layerId
          }}
        </router-link>
      </div>
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
        :style="{ background: $store.state.background }"
        @click="toggleClick"
      />
    </div>
    <div class="colorBox" v-if="openColor" @click="cancelClick">
      <chrome :value="$store.state.background" @input="updateBackground" :disableFields="true" />
    </div>
    <div>
      <label for="size">
        {{
        tooltipNum ? tooltipNum + " Layers" : "How many"
        }}
      </label>
      <input
        type="range"
        min="1"
        max="100"
        step="0.1"
        name="size"
        @input="tooltipNum = numScale($event.target.value)"
        @change="
          (tooltipNum = null),
            ($store.state.size = numScale($event.target.value))
        "
        :value="numScale.invert(tooltipNum ? tooltipNum : $store.state.size)"
      />
    </div>
    <div>
      <label for="size">{{ tooltipSize }}</label>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.01"
        name="scale"
        @input="tooltipSize = $event.target.value"
        @change="tooltipSize = 'Size'"
        v-model="$store.state.scale"
      />
    </div>
    <div class="credits">
      <div class="mobileHint">Shake phone for a random layer</div>
      <div>
        Images by redditors of
        <a href="https://reddit.com/r/layer" target="_blank">/r/layer</a>
      </div>
      <div>
        Tooling by
        <a href="https://twitter.com/chrispiecom" target="_blank">chrispie</a> - <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="menu">
      <div class="hamburger" :class="{ arrow: !closed }" @click="closed = !closed">
        <div class="a"></div>
        <div class="b"></div>
        <div class="c"></div>
      </div>
      <svg @click="download" class="saveIcon" viewBox="0 0 24 24" alt="Download Background">
        <path d="M8 6h-5v15h18v-15h-5v-3h8v21h-24v-21h8v3zm5 6h4l-5 6-5-6h4v-12h2v12z" />
      </svg>
      <svg
        @click="random"
        class="randomIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M10.848 15.932c-.399.781-.732 1.599-1.003 2.447-1.14-2.552-3.109-4.676-5.912-6.267l-1.463 2.656-2.47-5.881 6.33-1.126-1.433 2.601c2.606 1.472 4.593 3.349 5.951 5.57zm9.219-3.819l1.463 2.655 2.47-5.881-6.33-1.126 1.433 2.601c-5.339 3.017-8.103 7.72-8.103 13.638h2c0-5.144 2.405-9.241 7.067-11.887zm-8.025-12.113l-4.042 5h3v7.762c.352.409.684.831.991 1.269.312-.443.65-.87 1.009-1.286v-7.745h3l-3.958-5z"
        />
      </svg>
      <router-link to="/">
        <svg
          class="searchIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { global, makeUrl } from "../utils.js";
import { Chrome } from "vue-color";
import { saveAs } from "file-saver";
import { scalePow } from "d3-scale";

export default {
  name: "settings",
  data: function() {
    return {
      openColor: false,
      tooltipSize: "Size",
      tooltipNum: null,
      closed: false
    };
  },
  components: { Chrome },
  methods: {
    cancelClick: function(e) {
      e.stopPropagation();
      this.openColor = true;
    },
    toggleClick: function(e) {
      e.stopPropagation();
      this.openColor = !this.openColor;
    },
    closeColor: function(e) {
      if (this.openColor) {
        this.openColor = false;
      }
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
    updateBackground: function(color) {
      this.$store.state.background = color.hex;
    },
    random: function(e) {
      const id = this.$store.dispatch("setRandomId");
      // this.$router.push("/" + id);
      e.preventDefault();
    }
  },
  computed: {
    ...mapGetters(["data", "siblingsFiltered", "isMobile"]),
    ...mapState(["loaded", "size", "idSelected"]),
    itemSelected: function() {
      return this.siblingsFiltered.find(d => d.layerId === this.idSelected);
    },
    layerUrl: function() {
      return makeUrl(this.itemSelected.id);
    },
    numScale: function() {
      return scalePow()
        .exponent(2)
        .domain([1, 100])
        .rangeRound([10, 3000])
        .nice();
    }
  },
  created: function() {
    this.closed = this.isMobile;
  }
};

async function canvas2png(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve));
}
</script>

<style scoped lang="stylus">
a {
  color: #000;
  text-decoration: none;
}

.container {
  padding: 20px;
  width: 270px;
  font-size: 14px;
  position: absolute;
  background: #ffffffeb;
  right: 0;
  display: flex;
  flex-flow: column;
  user-select: none;
  // backdrop-filter: blur(10px);
  transition: transform 0.6s;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  will-change: transform;
  transform: translateY(-5px);

  &.closed {
    transform: translateY(calc(-100% + 55px));
  }

  > div {
    padding-bottom: 1.2em;
    clear: both;
  }
}

.mobileHint {
  display: none;
}

@media only screen and (max-width: 600px) {
  .mobileHint {
    display: block;
  }
}

.layerInfo {
  display: flex;
  flex-flow: collumn;

  .left {
    width: 128px;
    height: 128px;
    margin-right: 10px;
  }
}

label {
  width: 100px;
  display: inline-block;
  float: left;
  height: 1em;
  padding-bottom: 5px;
  padding-top: 5px;
  font-weight: 500;
}

input {
  font-size: 15px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 30px;
  width: 120px;
  text-align: center;
  float: left;
}

.colorField {
  width: 120px;
  height: 30px;
  display: inline-block;
  float: left;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.colorBox {
  margin: auto;
}

.dice {
  cursor: pointer;
}

.credits {
  // font-size: 12px;
  line-height: 1.4em;
  color: #555;
}

.download {
  font-size: 15px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  color: #000;
  background: #fff;
  cursor: pointer;
  line-height: 1em;
  width: 100%;

  &:hover {
    background: #ffffff7d;
  }
}

.menu {
  position: relative;
  margin: -20px;
  margin-top: 0px;
  background: #FFF;
  padding: 20px;
  border-radius: 5px;
}

.hamburger {
  width: 36px;
  cursor: pointer;
  height: 20px;
  margin-top: 3px;
  float: left;
  transform: scale(0.8);

  .a, .b, .c {
    background: #484848;
    width: 29px;
    height: 3px;
    position: absolute;
    border-radius: 2px;
    transition: transform 0.5s, width 0.5s, opacity 0.5s;
    transition-delay: 0.5s;
  }

  .a {
    transform: translateY(0px);
  }

  .b {
    // transition: opacity 0.3s;
    transform: translateY(7px);
  }

  .c {
    transform: translateY(14px);
  }

  &.arrow {
    .b {
      opacity: 0;
    }

    .a {
      width: 25px;
      transform: translate(-3px, 8px) rotate(-45deg);
    }

    .c {
      width: 25px;
      transform: translate(13px, 8px) rotate(45deg);
    }
  }
}

.saveIcon {
  position: relative;
  cursor: pointer;
  width: 20px;
  left: 105px;
  float: left;

  path {
    fill: #484848;
  }
}

.randomIcon {
  cursor: pointer;
  width: 20px;
  left: 16px;
  float: left;
  position: relative;

  path {
    fill: #484848;
  }
}

.searchIcon {
  cursor: pointer;
  width: 20px;
  left: 73px;
  float: right;

  path {
    fill: #484848;
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
