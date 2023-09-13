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
      axios.get(url).then((response) => {
        const cardData = response.data.data.map((card) => {
          const { id } = card;
          return;
        });
        store.cards;
        console.log();
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
