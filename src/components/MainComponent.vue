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
        <h1>Found {{ title }} Cards</h1>
        <!-- CARDS -->
      </div>
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
  }
}
</style>
