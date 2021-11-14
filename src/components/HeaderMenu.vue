<template>
  <div class="header">
    <ul class="menu">
      <li><router-link to="/" class="menu-item">首頁</router-link></li>
      <li class="menu-item">|</li>
      <li><router-link to="/Scene" class="menu-item">景點</router-link></li>
      <li class="menu-item">|</li>
      <li><router-link to="/Food" class="menu-item">美食</router-link></li>
      <li class="menu-item">|</li>
      <li><router-link to="/Hotel" class="menu-item">住宿</router-link></li>
      <li class="menu-item">|</li>
      <li><router-link to="/Activity" class="menu-item">活動</router-link></li>
      <!-- <li><a href="" class="menu-item">放大鏡</a></li>
      <li><a href="" class="menu-item">登入</a></li> -->
    </ul>
    <div class="main-logo">
      <a href="#"
        ><img
          src="@/assets/images/main-logo.png"
          alt="main logo"
          title="台灣旅遊導覽"
      /></a>
    </div>
    <div class="title">
      <a href="#">
        <h1>Taiwan Tour</h1>
        <h2>台灣旅遊導覽</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style lang="scss">
// RWD
@mixin pad {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin phone {
  @media (max-width: 568px) {
    @content;
  }
}
// --- Header ---
.header {
  background-image: url("../assets/images/background.png");
  background-repeat: no-repeat;
  height: 700px;
  .menu {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    .menu-item {
      font-size: 18px;
      font-weight: 700;
      line-height: 32px;
      text-align: center;
      color: #5f5757;
      text-decoration: none;
      // padding-right: 10px;
      margin-right: 10px;
      &:hover {
        font-size: 23px;
        background: #5f5757;
        color: aliceblue;
        border-radius: 5px;
        padding-right: 10px;
        padding-left: 10px;
      }
    }
  }
  .main-logo {
    height: 230px;
    display: flex;
    justify-content: center;
    a {
      display: block;
    }
  }
  .title {
    margin-top: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    a {
      width: 500px;
      text-decoration: none;
      color: rgb(73, 70, 70);
      display: block;
      background: rgba($color: white, $alpha: 0.5);
      border-radius: 30px;
      text-decoration: none;
      line-height: 80px;
      @include phone {
        width: 270px;
        line-height: 40px;
      }
    }
    h1 {
      font-size: 50px;
      font-weight: bold;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      @include phone {
        font-size: 35px;
        margin-bottom: 10px;
      }
    }
    h2 {
      font-size: 28px;
      @include phone {
        font-style: 10px;
      }
    }
  }
}
</style>
