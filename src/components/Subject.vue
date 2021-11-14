<template>
  <ul class="subject">
      <li><a href="#/Scene">
      <img src="@/assets/images/scene.png" alt="景點主題" class="subject-image"></a>
      <p><strong>景點</strong></p>
      </li>
      <li><a href="#/Food">
      <img src="@/assets/images/food.png" alt="美食主題" class="subject-image"></a>
      <p><strong>美食</strong></p>
      </li>
      <li><a href="#/Hotel">
      <img src="@/assets/images/hotel.png" alt="住宿主題" class="subject-image"></a>
      <p><strong>住宿</strong></p>
      </li>
      <li><a href="#/Activity">
      <img src="@/assets/images/traffic.png" alt="活動主題" class="subject-image"></a>
      <p><strong>活動</strong></p>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'Subject'
}
</script>

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
// subject
.subject {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.subject li{
    position: relative;
    width: 300px;
    padding-bottom: 20px;
    text-align: center;
    @include padpro{
      width: 350px;
    }
}
.subject p{
    height: 100px;
    width: 52px;
    border: 2px black solid;
    background: white;
    font-size: 32px;
    writing-mode: vertical;
    text-align: center;
    padding-top: 15px;
    position: absolute;
    right: 10px;
    top: -10px;
    box-shadow: -7px 7px 7px grey;
    @include pad{
      right: -10px;
    }
}
</style>
