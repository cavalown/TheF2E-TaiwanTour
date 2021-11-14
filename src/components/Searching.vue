<template>
  <div class="searching">
    <!-- <div class="search-column">
        <div class="area-1">
            <input type="text" class="form-keyword" placeholder="請輸入關鍵字" aria-label="keyword">
        </div>
        <div class="area-2">
            <select class="form-select-city" aria-label="city">
            <option selected>選擇地區</option>
            <option value="Taipei">臺北市</option>
            <option value="NewTaipei">新北市</option>
            <option value="Taoyuan">桃園市</option>
            <option value="Taichung">臺中市</option>
            <option value="Tainan">臺南市</option>
            <option value="Kaohsiung">高雄市</option>
            <option value="Keelung">基隆市</option>
            <option value="Hsinchu">新竹市</option>
            <option value="HsinchuCounty">新竹縣</option>
            <option value="MiaoliCounty">苗栗縣</option>
            <option value="ChanghuaCounty">彰化縣</option>
            <option value="NantouCounty">南投縣</option>
            <option value="YunlinCounty">雲林縣</option>
            <option value="ChiayiCounty">嘉義縣</option>
            <option value="Chiayi">嘉義市</option>
            <option value="PingtungCounty">屏東縣</option>
            <option value="YilanCounty">宜蘭縣</option>
            <option value="HualienCounty">花蓮縣</option>
            <option value="TaitungCounty">臺東縣</option>
            <option value="KinmenCounty">金門縣</option>
            <option value="PenghuCounty">澎湖縣</option>
            <option value="LienchiangCounty">連江縣</option>
        </select>
        <select class="form-select-type" aria-label="type">
            <option selected>選擇主題</option>
            <option value="1">景點</option>
            <option value="2">美食</option>
            <option value="3">住宿</option>
            <option value="4">活動</option>
        </select>
        <button type="submit" class="btn btn-primary">搜尋</button>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Searching'
}
</script>

<style scoped lang="scss">
.searching{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.search-column {
    width: 700px;
    border: 2px solid blue;
    line-height: 80px;
}
.area-1{
    font-size: 20px;
}

</style>
