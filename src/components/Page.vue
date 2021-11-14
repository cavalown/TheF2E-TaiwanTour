<template>
  <div class="page">
    <ul class="pages">
        <li>
            <a href="#" class="left-arrow arrow"></a>
        </li>
        <li><a href="#" class="page-number">1</a></li>
        <li><a href="#" class="page-number">2</a></li>
        <li><a href="#" class="page-number">3</a></li>
        <li><a href="#" class="page-number">4</a></li>
        <li><a href="#" class="page-number">5</a></li>
        <li>
            <a href="#" class="right-arrow arrow"></a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// page
.pages {
  display: flex;
  text-align: center;
  justify-content: center;
  .page-number {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    font-size: 30px;
    margin: 10px;
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
    // background: grey;
    border: 1px solid grey;
    color: grey;
    .left-arrow{
        background-image: url("../assets/images/arrow-left-circle.svg");
    }
    .right-arrow{
        background-image: url("../assets/images/arrow-right-circle.svg");
    }
    .arrow {
        background-repeat: no-repeat;
        background-size: 100%;
        display: block;
        width: 50px;
        height: 50px;
        margin-top: 10px;
    }
  }
}

</style>
