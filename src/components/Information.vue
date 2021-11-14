<template>
<div class="information">
  <ul class="info-type">
    <li class="info-title">活動新訊</li>
    <li><a href="" class="info-item">最新消息</a></li>
    <li><a href="" class="info-item">活動異動</a></li>
    <li><a href="" class="info-item">熱門話題</a></li>
  </ul>
  <ul class="info-type">
    <li class="info-title">景點</li>
    <li><a href="" class="info-item">熱門景點</a></li>
    <li><a href="" class="info-item">主題景點</a></li>
  </ul>
  <ul class="info-type">
    <li class="info-title">美食</li>
    <li><a href="" class="info-item">台灣文化</a></li>
    <li><a href="" class="info-item">台灣小吃</a></li>
    <li><a href="" class="info-item">台灣在地特色</a></li>
    <li><a href="" class="info-item">熱門美食</a></li>
  </ul>
  <ul class="info-type">
    <li class="info-title">住宿</li>
    <li><a href="" class="info-item">觀光旅館</a></li>
    <li><a href="" class="info-item">旅館</a></li>
    <li><a href="" class="info-item">民宿</a></li>
  </ul>
  <ul class="info-type">
    <li class="info-title">交通</li>
    <li><a href="" class="info-item">陸運資訊</a></li>
    <li><a href="" class="info-item">高速公路</a></li>
    <li><a href="" class="info-item">交通租賃</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
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
// information
.information {
  background: linear-gradient(0deg, #A7D4DA 0%, rgba(167, 212, 218, 0) 89.54%);
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  flex-wrap: wrap;
  padding: 30px;
}
.info-type{
  @include phone{
    width: 400px;
    text-align: center;
  }
}
.info-title {
  font-size: 28px;
  font-weight: bold;
  line-height: 50px;
}
.info-item {
  text-decoration: none;
  font-size: 24px;
  color:#5f5757;
  line-height: 40px;
  &:hover{
    font-size: 30px;
  }
}

</style>
