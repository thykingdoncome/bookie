<template>
  <div id="app">
    <Container />
    <Footer />
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Container,
    Footer
  },
};
</script>

<style lang="scss"> 
</style>
