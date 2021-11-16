<template>
  <div class="hot-hotel">
    <div class="hot-hotel-title">
      <p>住宿推薦</p>
      <a href="#/Hotel">查看更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotHotel'
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
// hot-hotel
.hot-hotel-title {
  background: #C2BB96;
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
</style>
