<template>
  <div class="home" id="homepage">
    <HeaderMenu/>
    <Weather/>
    <Searching/>
    <Subject/>
    <HotScene/>
    <HotFood/>
    <HotHotel/>
    <Information/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
import Weather from '@/components/Weather.vue'
import Information from '@/components/Information.vue'
import Subject from '@/components/Subject.vue'
import HotScene from '@/components/HotScene.vue'
import HotFood from '@/components/HotFood.vue'
import HotHotel from '@/components/HotHotel.vue'
import Searching from '@/components/Searching.vue'

export default {
  name: 'Home',
  components: {
    HeaderMenu,
    Footer,
    Weather,
    Information,
    Subject,
    HotScene,
    HotFood,
    HotHotel,
    Searching
  }
}

</script>
