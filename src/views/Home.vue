<template>
  <div class="home">
    <Banner viewName="home" />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Home",
  components: {
    Banner,
    Footer
},
}
</script>

<style lang="scss">
.home {
  margin: 0 auto;
}
</style>
