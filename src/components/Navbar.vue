<template>
  <div class="navbar">
    <ul>
      <li><a href="#">活動資訊</a>｜</li>
      <li><a href="#">景點</a>｜</li>
      <li><a href="#">美食</a>｜</li>
      <li><a href="#">住宿</a>｜</li>
      <li><a href="#">交通</a></li>
      <li>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-user" />
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Navbar'
}
</script>

<style lang="scss">
.navbar {
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: flex-end;
    padding-top: 29px;
    margin-right: 20px;

    li {

      &:nth-child(6),
      &:nth-child(7) {
        margin-left: 10px;
        color: rgba(0, 0, 0, 0.5);
      }

      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
      }
    }
  }
}
</style>
