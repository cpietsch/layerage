<template>
  <div class="home">
    <div class="welcome" v-if="loaded">
      <form @submit="submit">
        <input
          type="text"
          name="layerId"
          v-model="id"
          placeholder="Enter layer id"
          class="input"
        />
        <button type="submit" class="button">Go</button>
        <button class="button lucky" @click="random">♺</button>
      </form>

      <!-- <img :src="image" v-if="image" class="image" /> -->
    </div>
    <div class="welcome" v-if="!loaded">
      loading
    </div>
    <div class="qube-perspective spin" v-if="style">
      <ul class="qube no-shading layercube">
        <li class="front" :style="style"></li>
        <li class="left" :style="style"></li>
        <li class="back" :style="style"></li>
        <li class="right" :style="style"></li>
        <li class="top" :style="style"></li>
        <li class="bottom" :style="style"></li>
      </ul>
    </div>
    <a
      class="credit"
      v-if="item"
      target="blank"
      :href="'https://www.reddit.com/r/Layer/' + item.url"
      >by {{ item.url }}</a
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { makeUrlBig } from "../utils.js";

export default {
  name: "home",
  data: function() {
    return {
      id: null
    };
  },
  methods: {
    submit: function(e) {
      console.log("submit", this.id);
      e.preventDefault();
      if (this.id) {
        this.$router.push("/" + this.id);
      }
    },
    random: function(e) {
      // console.log("random");
      this.id = this.data[parseInt(Math.random() * this.data.length)].layerId;
      e.preventDefault();
    }
  },
  computed: {
    ...mapGetters(["data"]),
    loaded: function() {
      return this.data.length > 0;
    },
    item: function() {
      if (this.id) {
        return this.data.find(d => d.layerId === this.id);
      } else {
        return false;
      }
    },
    image: function() {
      if (this.item) {
        return makeUrlBig(this.item.id);
      } else {
        return false;
      }
    },
    style: function() {
      if (this.item) {
        return `background-image: url(${makeUrlBig(this.item.id)});`;
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/qube.css';

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
.home .welcome {
  z-index: 100;
  padding: 20px;
}

.credit {
  font-size: 10px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.input {
  font-size: 20px;
  padding: 10px;
  border: 1px solid #dadada;
  border-radius: 3px;
  line-height:1em;
}
.button {
  font-size: 20px;
  padding: 10px;
  margin-left: 5px;
  border-radius: 3px;
  border: 1px solid #dadada;
  background: #ff02df;
  color: #000000b5;
  cursor: pointer;
  line-height:1em;
}
.lucky {
  background: #fff;
  opacity: 0.3;
  margin-left: 10px;
}
.lucky:hover{
  opacity: 1;
}

.spin {
  position:absolute;
}

.spin .qube {
    animation: rotateY linear infinite 20s;
}

button:focus {outline:0;}


@keyframes rotateY {
    from {
        transform: rotateY(0) rotateX(0);
    }
    to {
        transform: rotateY(359.99deg) rotateX(359.99deg);
    }
}

.layercube {
  width: 256px; height: 256px;
 }
.layercube > * {
  background-size: contain;
}
</style>
