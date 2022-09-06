<template>
  <div class="banner">
    <Navbar />
    <div class="logo">
      <img src="../assets/logo2.svg" alt="logo">
    </div>
    <div class="title">
      <a href="#">
        <h1>台灣旅遊</h1>|
        <h2>Taiwan Tour</h2>
      </a>
    </div>
    <div class="description">
      <p>台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！
        到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue';
export default {
    name: "Banner",
    components: { Navbar },
    props: {
      viewName: String,
    },
    data() {
      return {
        imgDepository: {
          home: "../assets/home-background.svg",
          scene: "../assets/scene-background.svg",
          food: "../assets/food-background.svg",
          hotel: "../assets/hotel-background.svg",
          traffic: "../assets/traffic-background.svg"
        }
      }
    },
    methods: {
      setBackgroundImg() {
        console.log('***', this.imgDepository[this.$props.viewName])
        if (this.$props.viewName.length>0) return {background: `url(${this.imgDepository[this.$props.viewName]})`}
      }
    },
}
</script>

<style lang="scss">
.banner {
  width: 1280px;
  height: 700px;
  margin: 0 auto;
  background: url("../assets/home-background.svg");

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    img {
      width: 284px;
      height: 217px;
    }
  }

  .title {
    margin-bottom: 50px;

    a {
      display: flex;
      justify-content: center;
      color: rgb(94, 91, 91);
      font-size: 48px;

      h1 {
        margin-right: 10px;
      }

      h2 {
        margin-left: 10px;
      }
    }
  }

  .description {
    display: flex;
    justify-content: center;
    margin-top: 260px;

    p {
      width: 688px;
      font-size: 16px;
      line-height: 23px;
    }
  }
}
</style>