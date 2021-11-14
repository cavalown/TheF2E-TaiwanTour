<template>
  <div class="hot-activity">
    <div class="hot-activity-title">
      <p>住宿推薦</p>
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
// .hot-hotel{
//     height: 660px;
// }
.hot-activity-title {
  height: 71px;
  background: #C2BB96;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.hot-activity-title p {
  font-size: 48px;
  color: #FFFFFF;
}
.hot-activity-title a {
  height: 50px;
  width: 200px;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 26px;
  padding-top: 10px;
  color: aliceblue;
}
</style>
