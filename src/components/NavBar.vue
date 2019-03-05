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
              <i class="login-list-icon phone"></i>
              <span class="login-list-text">手机号登录</span>
            </div>
            <div class="login-list-item">
              <i class="login-list-icon wx"></i>
              <span class="login-list-text">微信登录</span>
            </div>
            <div class="login-list-item">
              <i class="login-list-icon qq"></i>
              <span class="login-list-text">QQ登录</span>
            </div>
            <div class="login-list-item">
              <i class="login-list-icon wb"></i>
              <span class="login-list-text">新浪微博登录</span>
            </div>
            <div class="login-list-item">
              <i class="login-list-icon wy"></i>
              <span class="login-list-text">网易邮箱账号登录</span>
            </div>
            <i class="login-icon"></i>
          </div>



        </div>

        <router-link to="/create" class="create">创作者中心</router-link>

        <div class="search">
          <div class="search-wrap">
            <input type="text" class="search-input" placeholder="音乐/视频/电台/用户">
          </div>
        </div>

      </div>
    </div>
    <div class="nav-bottom">
      <div class="nav-bottom-wrap">
        <div class="nav-bottom-list">
          <router-link to="/discover" tag="span" class="bottom-list-item" exact-active-class="bottom-item-active">
            <span class="bottom-list-item-text">推荐</span>
          </router-link>
          <router-link to="/discover/toplist" tag="span" class="bottom-list-item" exact-active-class="bottom-item-active">
            <span class="bottom-list-item-text">排行榜</span>
          </router-link>
          <router-link to="/discover/playlist" tag="span" class="bottom-list-item" exact-active-class="bottom-item-active">
            <span class="bottom-list-item-text">歌单</span>
          </router-link>
          <router-link to="/discover/djradio" tag="span" class="bottom-list-item" exact-active-class="bottom-item-active">
            <span class="bottom-list-item-text">主播电台</span>
          </router-link>
          <router-link to="/discover/artist" tag="span" class="bottom-list-item" exact-active-class="bottom-item-active">
            <span class="bottom-list-item-text">歌手</span>
          </router-link>
          <router-link to="/discover/album" tag="span" class="bottom-list-item" exact-active-class="bottom-item-active">
            <span class="bottom-list-item-text">新碟上架</span>
          </router-link>
        </div>
      </div>
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
  margin: 22px 0 0 20px;
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
  display: none;
  position: absolute;
  top: 55px;
  right: 79px;
  width: 158px;
  background: #2b2b2b;
  border: 1px solid #202020;
  box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
  border-radius: 4px;
}

.login:hover .login-list {
  display: block;
}

.login-list-item {
  position: relative;
  height: 38px;
  box-sizing: border-box;
  overflow: hidden;
  padding-left: 24px;
  color: #ccc;
  line-height: 39px;
  border-bottom: 1px solid #232323;
}

.login-list-item:hover {
  background: #353535;
  cursor: pointer;
}

.login-list-text {
  float: left;
  width: 100px;
  font-style: normal;
  text-align: left;
  font-size: inherit;
  line-height: 38px;
}

.login-list-icon {
  float: left;
  display: block;
  width: 18px;
  height: 18px;
  margin: 10px 10px 0 -7px;
  background: url('../../public/img/toplist.png') no-repeat;
}

.phone {
  background-position: 0 0;
}

.wx {
  background-position: -20px -20px;
}

.qq {
  background-position: -20px -40px;
}

.wb {
  background-position: 0 -20px;
}

.wy {
  background-position: 0 -40px;
}

.login-icon {
  display: block;
  position: absolute;
  top: -8px;
  left: 50%;
  width: 14px;
  height: 8px;
  margin-left: -7px;
  background: url('../../public/img/toplist.png') no-repeat;
  background-position: -20px 0;
}

/* 创作中心 */
.create {
  float: right;
  font-size: 11px;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 17px;
  border: 1px solid #4F4F4F;
  line-height: 30px;
  color: #ccc;
  border-radius: 20px;
}

.create:hover {
  border: 1px solid #ffffff;
  color: #ffffff;
}

/* 搜索框 */
.search {
  position: relative;
  float: right;
  width: 158px;
  height: 32px;
}

.search-wrap {
  float: right;
  width: 158px;
  height: 32px;
  margin-top: 19px;
  background: url('../../public/img/topbar.png') no-repeat;
  background-position: 0 -99px;
  background-color: #fff;
  border-radius: 32px;
}

.search-input {
  font-size: 12px;
  color: #333333;
  margin-left: 25px;
  margin-top: 8px;
  width: 120px;
}

/* 底部导航 */
.nav-bottom {
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
}

.nav-bottom-wrap {
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}

.nav-bottom-list {
  float: left;
  padding-left: 180px;
}

.bottom-list-item {
  display: block;
  float: left;
  height: 34px;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
}

.bottom-list-item-text {
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
  border-radius: 20px;
  line-height: 21px;
}

.bottom-list-item-text:hover {
  background: #9B0909;
  cursor: pointer;
}

.bottom-item-active .bottom-list-item-text {
  background: #9B0909;
}

</style>
