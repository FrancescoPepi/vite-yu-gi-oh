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
          const { id, name, attribute, card_images } = card;

          return { id, name, attribute, card_images };
        });

        store.cards = cardData;
        const { previous_page, next_page } = response.data.meta;
        store.next = next_page;
        store.back = previous_page;
        // console.log(store.next);
      });
    },

    goNext() {
      if (!store.next) return;
      this.fetchCards(this.store.next);
    },

    goBack() {
      if (!store.back) return;
      this.fetchCards(this.store.back);
    },
  },
  created() {
    this.fetchCards(store.url);
    // console.log(store.url);
  },
};
</script>

<template>
  <HeaderComponent />
  <div class="text-center">
    <div class="btn btn-primary m-3" @click="goBack()">back</div>
    <div class="btn btn-primary m-3" @click="goNext()">next</div>
  </div>
  <MainComponent />
</template>

<style lang="scss"></style>
