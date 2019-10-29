<template>
  <div class="home">
    <div class="welcome" v-if="loaded">
      <form @submit="submit">
        <!--         <input
          type="text"
          name="layerId"
          v-model="$store.state.id"
          placeholder="Enter layer id"
          class="input"
        /> -->

        <div class="searchBox">
          <multiselect
            :value="value"
            :options="options"
            placeholder="Layer name or id"
            label="name"
            track-by="lid"
            :limit="40"
            :custom-label="customLabel"
            :options-limit="40"
            :showLabels="false"
            @input="inputSearch"
            @open="openSearch"
          >
            <template slot="option" slot-scope="props">
              <div class="option__desc">
                <img
                  class="option__image"
                  :src="makeUrl(props.option.id)"
                  :alt="props.option.name"
                />
                <span class="option__title">{{ props.option.name }}</span>
                <span class="option__id">{{ props.option.lid }}</span>
              </div>
            </template>
          </multiselect>
        </div>

        <button autofocus type="submit" class="button">Build</button>
        <button type="button" class="button lucky" @click="random">🎲</button>


      </form>

      <!-- <img :src="image" v-if="image" class="image" /> -->
    </div>
    <div class="welcome" v-if="!loaded">loading</div>
    <h1><span>Find a layer.</span><span>Build a background.</span></h1>
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
      :href="'https://www.reddit.com/r/Layer/comments/' + item.url"
      >by {{ item.url }}</a
    >
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
  // data: function() {
  //   return {
  //     value: null
  //   };
  // },
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
      console.log("random");
      const id = this.$store.dispatch("setRandomId");
      e.preventDefault();
    },
    inputSearch(value, id){
      // console.log(value, id)
      if(value && value.lid){
        this.$store.dispatch("setId", value.lid);
      }
    },
    openSearch(id){
      console.log(id)
    },
    customLabel ({ name, lid }) {
      return `${name} – ${lid}`
    }
  },
  computed: {
    ...mapGetters(["data", "item"]),
    ...mapState(["id"]),
    options: function() {
      return this.data.map(d => ({
        name: d.url.split("/")[1].replace(/_/g, " "),
        lid: d.layerId,
        id: d.id
      }));
    },
    value: function(){
      if(this.item){
        const d = this.item
        return {
          name: d.url.split("/")[1].replace(/_/g, " "),
          lid: d.layerId,
          id: d.id
        }
      } else {
        return null
      }
    },
    loaded: function() {
      return this.data.length > 0;
    },
    // item: function() {
    //   if (this.id) {
    //     return this.data.find(d => d.layerId === this.id);
    //   } else {
    //     return false;
    //   }
    // },
    style: function() {
      if (this.item) {
        return `background-image: url(${makeUrlBig(this.item.id)});`;
      } else {
        return "";
      }
    }
  },
  mounted: function() {
    // if (!this.id) this.$store.dispatch("setRandomId");
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="stylus">
@import '../assets/qube.css';
// @import '/vue-multiselect/dist/vue-multiselect.min.css'

.searchBox {
  font-family: "Helvetica";
  display: inline-block;
  float: left;
  width: 230px;
}
.option__desc {
  font-size: 12px;
  clear: both;
  
  .option__title {
    font-weight: bold;
    float:left;
    max-width: 65%;
    overflow: hidden;
  }
  
  .option__id {
    float: right;
  }
  
  .option__image {
    width: 25px;
    height: 25px;
    
    float:left;
    margin-right: 5px;
    position: relative;
    top: -5px;
    left: -5px;
  }
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
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

.input {
  font-size: 20px;
  padding: 10px;
  border: 1px solid #dadada;
  border-radius: 3px;
  line-height: 1em;
  width: 150px;
}

.button {
  font-size: 20px;
  padding: 10px;
  margin-left: 5px;
  border-radius: 3px;
  border: 1px solid #9f62bb;
  background: #ce76f7;
  color: #000000b5;
  cursor: pointer;
  line-height: 1em;
  float: left;
}

.lucky {
  font-size: 30px;
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
