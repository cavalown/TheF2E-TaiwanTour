<template>
  <div class="entry">
    <div class="left-area">
      <img src="../assets/logo2.png" alt="logo" />
    </div>
    <div class="right-area">
      <div class="user-info">
        <h1>登入</h1>
        <img src="../assets/user.svg" alt="user-head" />
        <form>
          <div class="user-email user-input">
            <font-awesome-icon icon="fa-solid fa-user" />
            <input type="email" id="userEmail" placeholder="user@gmail.com" />
          </div>
          <div class="user-password user-input">
            <font-awesome-icon icon="fa-solid fa-unlock-keyhole" />
            <input type="password" id="password" placeholder="請輸入密碼" />
          </div>
        </form>
        <button type="submit">登入</button>
        <div class="three-party-entry">
          <h2>註冊</h2>
          <div class="three-party-items">
            <a href="https://google.com" target="_blank">
              <img src="@/assets/google.png" alt="google login">
              <p>google</p>
            </a>
            <a href="https://facebook.com" target="_blank">
              <img src="@/assets/facebook.png" alt="facebook login">
              <p>facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
}
</script>

<style lang="scss">
.entry {
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .left-area {
    width: 30%;
    min-width: 553px;
    background: url("../assets/background-singUp.svg") no-repeat left top;

    img {
      margin: 10em;
    }
  }

  .right-area {
    text-align: center;
    width: 60%;

    .user-info {
      width: 500px;
      margin: 0 auto;

      h1 {
        margin-top: 66px;
        margin-bottom: 47px;
        font-size: 48px;
      }

      img {
        width: 128px;
        margin-bottom: 43px;
      }

      form {
        margin: 0 auto;
        font-size: 16px;

        .user-input {
          margin: 0 auto;
          width: 260px;
          display: flex;
          margin-bottom: 36px;
          padding-bottom: 10px;
          border-bottom: 1px solid gray;
        }

        input {
          border: none;
          width: 100rem;
          margin-left: 10px;
          padding-left: 6px;
        }
      }

      button {
        font-size: 16px;
        width: 60px;
        height: 36px;
        border: 2px solid gray;
        border-radius: 10px;
        margin-bottom: 36px;
      }

      .three-party-entry {
        h2 {
          margin-bottom: 20px;
          font-size: 28px;
          text-align: left;
          color: gray
        }

        .three-party-items {
          display: flex;
          background-color: rgba(0, 0, 0, 0.25);
          width: 502px;
          height: 88px;
          border-radius: 20px;

          a {
            width: 200px;
            height: 54px;
            display: flex;
            justify-content: center;
            text-decoration: none;
            color: rgba(0, 0, 0, 0.8);
            background-color: white;
            border-radius: 10px;
            margin: auto;

            img {
              width: 36px;
              height: 36px;
              margin: auto 10px;
            }

            p {
              font-size: 28px;
              text-align: center;
              padding: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
