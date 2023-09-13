<script>
import CardComponent from "./subComponents/CardComponent.vue";

import { store } from "../data/store.js";

export default {
  data() {
    return {
      title: "titolo",
      store,
      // img: card.card_images.image_url,
    };
  },

  components: {
    CardComponent,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <!-- N.B. P-5 è DA RIVEDERE SE SI INSERISCE SELECT OPTION. -->
  <div class="bg p-5">
    <div class="container p-5">
      <div class="found">
        <h1>Found {{ store.cards.length }} Cards</h1>
      </div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
        <div
          class="col my-2"
          v-for="(card, index) in store.cards"
          :key="card.id"
        >
          <CardComponent :card="store.cards[index]"></CardComponent>
        </div>
      </div>
      <!-- CARDS -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #d48f38ff;
  color: white;
  .container {
    background-color: white;
    .found {
      background-color: #212529ff;
      height: 50px;
    }
    .col-text {
      background-color: red;
    }
  }
}
</style>
