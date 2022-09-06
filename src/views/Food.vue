<template>
  <div class="food">
    <Banner />
    <Footer viewName="food" />
  </div>
</template>

<script>
/* eslint-disable */
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Food",
  components: {
    Banner,
    Footer,
  },
}
</script>

<style lang="scss">
.food {
  margin: 0 auto;
}
</style>
