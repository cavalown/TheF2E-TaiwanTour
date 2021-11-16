<template>
  <div class="hot-activity">
    <div class="hot-activity-title">
      <p>活動推薦</p>
      <a href="#/Activity">查看更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity'
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
// hot-activity
.hot-activity-title {
  background: #AA796C;
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
