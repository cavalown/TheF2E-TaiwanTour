<template>
  <div class="footer">
    <div class="footer-logo">
      <a href="#" class="logo-link">
        <img src="@/assets/images/logo-footer.png" alt="small logo" />
      </a>
    </div>
    <div class="phones">
      <p>
        24小時免付費旅遊諮詢熱線：0800-011765
        <br /><br />免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
// footer
.footer {
  background: #6e9292;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
.footer-logo {
  width: 52px;
  margin-right: 28px;
  margin-left: 28px;
}
.phones {
  line-height: 20px;
  color: rgb(226, 237, 238);
}
</style>
