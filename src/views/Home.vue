<template>
  <div class="home">
    <div class="welcome" v-if="loaded">
      <form @submit="submit">
        <div class="searchBox">
          <multiselect
            :value="item"
            :options="data"
            placeholder="Layer name or id"
            label="name"
            track-by="id"
            :limit="100"
            :custom-label="customLabel"
            :options-limit="40"
            :showLabels="false"
            @input="inputSearch"
          >
            <template slot="option" slot-scope="props">
              <div class="option__desc">
                <img
                  class="option__image"
                  :src="makeUrl(props.option.id)"
                  :alt="props.option.title"
                />
                <span class="option__title">{{ props.option.title }}</span>
                <span class="option__id">{{ props.option.layerId }}</span>
              </div>
            </template>
          </multiselect>
        </div>

        <button autofocus type="submit" class="button">Build</button>
        <button type="button" class="button lucky" @click="random">🎲</button>
      </form>
    </div>
    <div class="welcome" v-if="!loaded">loading</div>
    <h1>
      <span>Find a layer.</span>
      <span>Build a background.</span>
    </h1>
    <div class="qube-perspective spin" v-if="item">
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
      :href="'https://www.reddit.com/r/Layer/comments/' + item.url"
    >by {{ item.url }}</a>
  <router-link to="/about" class="about">About this project</router-link>

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { makeUrlBig, makeUrl } from "../utils.js";
import Multiselect from "vue-multiselect";

export default {
  name: "home",
  components: {
    Multiselect
  },
  methods: {
    makeUrl,
    submit: function(e) {
      console.log("submit", this.id);
      e.preventDefault();
      if (this.id) {
        this.$router.push("/" + this.id);
      }
    },
    random: function(e) {
      this.$store.dispatch("setRandomId");
      e.preventDefault();
    },
    inputSearch(value, id) {
      // console.log("inputSearch", value);
      if (value && value.id) {
        this.$store.dispatch("setId", value.layerId);
      }
    },
    customLabel({ title, layerId }) {
      return `${title} – ${layerId}`;
    }
  },
  computed: {
    ...mapGetters(["data", "item"]),
    ...mapState(["id"]),
    loaded: function() {
      return this.data.length > 0;
    },
    style: function() {
      return `background-image: url(${makeUrlBig(this.item.id)});`;
    }
  },
  mounted: function() {}
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="stylus">
@import '../assets/qube.css';

// @import '/vue-multiselect/dist/vue-multiselect.min.css'
.searchBox {
  font-family: 'Helvetica';
  display: inline-block;
  float: left;
  width: 400px;
}

.option__desc {
  // font-size: 12px;
  clear: both;

  .option__title {
    font-weight: bold;
    float: left;
    max-width: 65%;
    overflow: hidden;
  }

  .option__id {
    float: right;
  }

  .option__image {
    width: 25px;
    height: 25px;
    float: left;
    margin-right: 5px;
    position: relative;
    top: -5px;
    left: -5px;
  }
}

.home {
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

h1 {
  position: absolute;
  top: 10%;
  margin: 10px;
  font-size: 28px;

  span {
    display: inline-flex;
    margin-right: 0.5em;
  }
}

.home .welcome {
  z-index: 100;
  padding: 10px;
}

.credit {
  font-size: 10px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.about {
  font-size: 10px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.button {
  font-size: 18px;
  padding: 10px;
  margin-left: 10px;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  background: #FFF;
  color: #000000b5;
  cursor: pointer;
  line-height: 1em;
  float: left;
}

.lucky {
  font-size: 25px;
  display: inline-block;
  padding: 0px;
  border: none;
  background: none;
  margin-top: 7px;
}

.lucky:hover {
  opacity: 1;
}

.spin {
  position: absolute;
}

.spin .qube {
  animation: rotateY linear infinite 20s;
}

button:focus {
  outline: 0;
}

@media only screen and (max-width: 600px) {
  .welcome {
    width: 100%;
  }

  .button {
    width: 100%;
    margin: 0px;
    margin-top: 10px;
  }

  .searchBox {
    width: 100%;
    margin: 0px;
  }
}

@keyframes rotateY {
  from {
    transform: rotateY(0) rotateX(0);
  }

  to {
    transform: rotateY(359.99deg) rotateX(359.99deg);
  }
}

.layercube {
  width: 256px;
  height: 256px;
}

.layercube > * {
  background-size: contain;
}
</style>
