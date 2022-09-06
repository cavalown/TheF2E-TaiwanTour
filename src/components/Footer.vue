<template>
  <div class="footer">
    <div class="footer-links">
      <div class="footer-link">
        <h3>活動資訊</h3>
        <ul>
          <li><a href="#">最新消息</a></li>
          <li><a href="#">活動異動</a></li>
          <li><a href="#">熱門話題</a></li>
        </ul>
      </div>
      <div class="footer-link">
        <h3>景點</h3>
        <ul>
          <li><a href="#">熱門景點</a></li>
          <li><a href="#">網紅攻略</a></li>
          <li><a href="#">主題景點</a></li>
        </ul>
      </div>
      <div class="footer-link">
        <h3>美食</h3>
        <ul>
          <li><a href="#">台灣文化</a></li>
          <li><a href="#">台灣小吃</a></li>
          <li><a href="#">台灣在地特色</a></li>
          <li><a href="#">熱門美食</a></li>
          <li><a href="#">網紅必推美食</a></li>
        </ul>
      </div>
      <div class="footer-link">
        <h3>住宿</h3>
        <ul>
          <li><a href="#">觀光旅館</a></li>
          <li><a href="#">旅館</a></li>
          <li><a href="#">民宿</a></li>
          <li><a href="#">住宿推薦</a></li>
        </ul>
      </div>
      <div class="footer-link">
        <h3>交通</h3>
        <ul>
          <li><a href="#">陸運資訊</a></li>
          <li><a href="#">高速公路</a></li>
          <li><a href="#">交通租賃</a></li>
        </ul>
      </div>
    </div>
    <div class="contact-info">
      <a href="#" class="logo">
        <img src="../assets/logo2.svg" alt="logo">
      </a>
      <article>
        <p>24小時免付費旅遊諮詢熱線：0800-011765</p>
        <p>免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）</p>
      </article>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
.footer {
  margin: 0 auto;

  .footer-links {
    background-color: rgb(167, 212, 218);
    height: 376px;
    display: flex;
    justify-content: space-evenly;
    padding-top: 72px;

    h3 {
      font-size: 28px;
      margin-bottom: 18px;
      text-align: left;
    }

    ul>li {
      margin-bottom: 18px;

      a {
        font-size: 24px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .contact-info {
    background-color: #6e9292;
    height: 76px;
    display: flex;

    .logo {
      img {
        width: 52px;
        height: 40px;
        margin: 18px 28px;
      }
    }

    article {
      font-style: 16px;
      color: rgba(248, 248, 248, 1);
      margin-top: 10px;

      p {
        line-height: 26px;
      }
    }
  }
}
</style>