<template>
  <div class="scene">
    <Banner viewName="scene" />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Banner from "../components/Banner.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Scene",
  components: {
    Banner,
    Footer,
  },
}
</script>

<style lang="scss">
.scene {
  margin: 0 auto;
}
</style>
