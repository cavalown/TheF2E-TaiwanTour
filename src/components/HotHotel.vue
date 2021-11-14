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
// .hot-hotel{
//     height: 660px;
// }
.hot-hotel-title {
  height: 71px;
  background: #c2bb96;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.hot-hotel-title p {
  font-size: 48px;
  color: #ffffff;
}
.hot-hotel-title a {
  height: 50px;
  width: 200px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 26px;
  padding-top: 10px;
  color: aliceblue;
}

</style>
