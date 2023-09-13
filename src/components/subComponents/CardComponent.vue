<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      title: "titolo",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  // components: {
  //	MyComponent,
  // },

  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="card text-center">
    <img class="w-100" :src="card.card_images[0].image_url" alt="" />
    <div class="card-text">
      <p>
        {{ card.name }}
      </p>
      <p v-if="card.attribute > 0">
        {{ card.attribute }}
      </p>
      <p v-else>Nessun Attributo</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
