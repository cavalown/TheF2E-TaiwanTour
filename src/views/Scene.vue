<template>
  <div class="scene" id="scenepage">
    <HeaderMenu/>
    <Searching/>
    <Page/>
    <Information/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
import Information from '@/components/Information.vue'
import Searching from '@/components/Searching.vue'
import Page from '@/components/Page.vue'

export default {
  name: 'Scene',
  components: {
    HeaderMenu,
    Footer,
    Information,
    Searching,
    Page
  }
}

</script>
