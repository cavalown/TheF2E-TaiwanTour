<template>
  <div class="hotel">
    <Banner viewName="hotel" />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Hotel",
  components: {
    Banner,
    Footer,
  },
}
</script>

<style lang="scss">
.hotel {
  margin: 0 auto;
}
</style>
