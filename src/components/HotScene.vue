<template>
  <div class="hot-scene">
    <div class="hot-scene-title">
      <p>熱門景點</p>
      <a href="#/Scene">查看更多</a>
    </div>
    <ul>
      <li class="hot-scene-single">
        <a href="" class="scene-link">
          <img src="" alt="" class="hot-scene-image">
          <p class="scene-name"></p>
          <div class="scene-city">
            <img src="@/assets/images/geo-alt.svg" alt="" class="map-logo">
            <p class="scene-area-text">City</p>
          </div>
        </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotScene'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// RWD
@mixin padpro {
  @media (max-width: 1024px) {
    @content;
  }
}
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
// hot-scene
.hot-scene-title {
  background: #6E9292;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  p {
  font-size: 48px;
  color: #FFFFFF;
  @include phone {
    font-size: 36px;
  }
}
a {
  line-height: 50px;
  width: 200px;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  font-size: 26px;
  color: aliceblue;
  @include phone {
    font-size: 20px;
    width: 120px;
  }
}
}
.hot-scene ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.hot-scene-single{
  width: 368px;
  height: 420px;
  border-radius: 20px;
  margin-top: 46px;
  border: 2px solid blueviolet;
}
</style>
