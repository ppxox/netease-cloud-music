<template>
  <div class="nav-bar">
    <div class="nav-top">
      <div class="nav-top-wrap">

        <i class="logo"></i>

        <!-- 菜单栏 -->
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/discover" class="menu-text-wrap" active-class="meun-active">
              <span>发现音乐</span>
              <i class="meun-icon"></i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/mymusic" class="menu-text-wrap" active-class="meun-active">
              <span>我的音乐</span>
              <i class="meun-icon"></i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/friend" class="menu-text-wrap" active-class="meun-active">
              <span>朋友</span>
              <i class="meun-icon"></i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/store" class="menu-text-wrap" active-class="meun-active">
              <span>商城</span>
              <i class="meun-icon"></i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/musician" class="menu-text-wrap" active-class="meun-active">
              <span>音乐人</span>
              <i class="meun-icon"></i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/download" class="menu-text-wrap" active-class="meun-active">
              <span>下载客户端</span>
              <i class="meun-icon"></i>
            </router-link>
            <i class="hot"></i>
          </li>
        </ul>

        <!-- 登录按钮 -->
        <div class="login">
          <router-link to="/login" class="login-text">登录</router-link>
          <div class="login-list">
            <div class="login-list-item">
              <i class="login-list-item"></i>
              <span class="login-list-text">手机号登录</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="nav-bottom">

    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>


<style>
.nav-bar {
  position: relative;
  left: 0;
  top: 0;
}

.nav-top {
  position: relative;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
}

.nav-top-wrap {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}

.logo {
  float: left;
  width: 176px;
  height: 69px;
  background: url('../../public/img/topbar.png') no-repeat;
  background-position: 0 0;
}

/* 菜单开始 */
.menu {
  float: left;
}

.menu-item {
  position: relative;
  float: left;
  height: 70px;
  font-size: 14px;
  color: #ccc;
}

.menu-item:hover {
  color: #ffffff;
  background: #000;
}

.menu-item .meun-active {
  color: #ffffff;
}

.meun-active {
  background: #000;
}

.meun-active .meun-icon {
  display: block;
  position: absolute;
  left: 50%;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: -6px;
  overflow: hidden;
  background: url('../../public/img/topbar.png') no-repeat;
  background-position: -226px 0;
}

.menu-text-wrap {
  display: inline-block;
  padding: 0 19px;
  text-align: center;
  height: 70px;
  line-height: 70px;
}

.hot {
  background: url('../../public/img/topbar.png') no-repeat;
  display: block;
  position: absolute;
  top: 21px;
  left: 100px;
  width: 28px;
  height: 19px;
  background-position: -190px 0;
}
/* 菜单结束 */

/* 登录开始 */
.login {
  font-size: 11px;
  float: right;
  height: 45px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
  background: url('../../public/img/topbar.png') no-repeat;
  background-position: right -50px;
}

.login-text {
  display: block;
  width: 28px;
  margin-top: 7px;
  color: #999999;
}

.login-text:hover {
  color: #787878;
  text-decoration: underline;
}

.login-list {
  position: absolute;
  height: 196px;
  top: 45px;
  right: 65px;
  width: 158px;
  background: #2b2b2b;
  border: 1px solid #202020;
  box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
  border-radius: 4px;
}

.login-list-item {
  position: relative;
  height: 38px;
  box-sizing: border-box;
  overflow: hidden;
  padding-left: 24px;
  color: #ccc;
  line-height: 39px;
}

.login-list-text {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}

.login-list-item {
  background: url('../../public/img/topbar.png') no-repeat;
}
</style>
