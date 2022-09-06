<template>
  <div class="traffic">
    <Banner viewName="traffic" />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Banner from "../components/Banner.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Traffic",
  components: {
    Banner,
    Footer,
  },
}
</script>

<style lang="scss">
.traffic {
  margin: 0 auto;
}
</style>
