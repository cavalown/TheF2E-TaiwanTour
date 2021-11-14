<template>
  <div class="weather">
    <p>
      台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！<br /><br>
      到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Weather'
}
</script>

<style scoped lang="scss">
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
// weather
.weather {
  background: linear-gradient(180deg, #a7d4da 0%, rgba(167, 212, 218, 0) 100%);
  padding-bottom: 50px;
}
p {
  font-size: 23px;
  color: rgb(73, 70, 70);
  text-align: center;
  padding-top: 20px;
  line-height: 30px;
  @include phone {
    font-size: 18px;
    text-align: left;
  }
}
</style>
