<template>
  <div class="hot-food">
    <div class="hot-food-title">
      <p>熱門美食</p>
      <a href="#/Food">查看更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotFood'
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
// hot-food
.hot-food-title {
  background: #738677;
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
