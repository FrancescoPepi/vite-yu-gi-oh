<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      logo: "/logo.png",
      title: "Yu-Gi-Oh",
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
  <header class="px-5 d-flex align-items-center">
    <div>
      <img :src="logo" :alt="title" />
    </div>
    <h1>{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: white;
  img {
    height: 100px;
    margin-right: 10px;
  }
}
</style>
