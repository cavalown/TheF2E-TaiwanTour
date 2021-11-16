<template>
  <div class="searching">
    <div class="search-group">
      <div class="search-area">
        <input type="text" class="keyword" placeholder="請輸入關鍵字" />
      </div>
      <div class="search-area second-line">
        <select class="area-item item1" aria-label="city">
          <option selected>選擇地區</option>
          <option value="Taipei" class="city">臺北市</option>
          <option value="NewTaipei" class="city">新北市</option>
          <option value="Taoyuan" class="city">桃園市</option>
          <option value="Taichung" class="city">臺中市</option>
          <option value="Tainan" class="city">臺南市</option>
          <option value="Kaohsiung" class="city">高雄市</option>
          <option value="Keelung" class="city">基隆市</option>
          <option value="Hsinchu" class="city">新竹市</option>
          <option value="HsinchuCounty" class="city">新竹縣</option>
          <option value="MiaoliCounty" class="city">苗栗縣</option>
          <option value="ChanghuaCounty" class="city">彰化縣</option>
          <option value="NantouCounty" class="city">南投縣</option>
          <option value="YunlinCounty" class="city">雲林縣</option>
          <option value="ChiayiCounty" class="city">嘉義縣</option>
          <option value="Chiayi" class="city">嘉義市</option>
          <option value="PingtungCounty" class="city">屏東縣</option>
          <option value="YilanCounty" class="city">宜蘭縣</option>
          <option value="HualienCounty" class="city">花蓮縣</option>
          <option value="TaitungCounty" class="city">臺東縣</option>
          <option value="KinmenCounty" class="city">金門縣</option>
          <option value="PenghuCounty" class="city">澎湖縣</option>
          <option value="LienchiangCounty" class="city">連江縣</option>
        </select>
        <select class="area-item item2" aria-label="type">
          <option selected>選擇主題</option>
          <option value="1" class="type">景點</option>
          <option value="2" class="type">美食</option>
          <option value="3" class="type">住宿</option>
          <option value="4" class="type">活動</option>
        </select>
        <div class="area-btn">
          <img src="@/assets/images/magnifier.png" alt="搜尋放大鏡" />
          <button class="submit" type="button">搜尋</button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Searching'
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
// search
.searching {
  .search-group {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 60px;
    @include phone {
        max-width: 450px;
    }
    .keyword {
      width: 350px;
      height: 40px;
      text-align: center;
      font-size: 20px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: 1px solid grey;
      @include phone {
        width: 250px;
      height: 30px;
    }
    }
    .second-line {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .area-item {
      width: 100px;
    //   height: 50px;
      font-size: 18px;
      text-align: center;
      vertical-align: middle;
      border-radius: 10px;
      margin-right: 10px;
      width: 80px;
      height: 30px;
      font-size: 14px;
      color: rgb(104, 100, 100);
    }
    .item1 {
      background: rgba($color: #336699, $alpha: 0.4);
      border: 1px solid #336699;
      box-shadow: 5px 5px 5px grey;
    }
    .item2 {
      background: rgba($color: #336666, $alpha: 0.4);
      border: 1px solid #336666;
      box-shadow: 5px 5px 5px grey;
    }
    .area-btn {
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      margin-left: 10px;
      border: 3px solid #e6beb4;
      background: rgba($color: #e6beb4, $alpha: 0.5);
      font-size: 25px;
      box-shadow: 5px 5px 5px grey;
      @include phone {
        width: 120px;
        height: 30px;
        font-size: 14px;
        margin-left: 5px;
        }
      button{
          background: none;
          border: none;
          font-size: 28px;
          color: rgb(104, 100, 100);
          @include phone {
            font-size: 16px;
            font-weight: bold;
        }
      }
    }
  }
  hr {
    margin-top: 30px;
    margin-bottom: 50px;
    width: 90%;
    height: 5px;
    color: #339999;
    border-top: 1px solid rgba(0,0,0,0.3);
    box-shadow: inset 0 10px 10px -10px;
  }
}
</style>
