<script>
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

import { store } from "./data/store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    HeaderComponent,
    MainComponent,
  },
  methods: {
    fetchCards(url) {
      axios.get(url).then((card) => {
        console.log(card.data.data);
      });
    },
  },
  created() {
    this.fetchCards(store.url);
    console.log(store.url);
  },
};
</script>

<template>
  <HeaderComponent />
  <div class="btn" @click="fetchCards(store.url)">ciao</div>
  <MainComponent />
</template>

<style lang="scss"></style>
