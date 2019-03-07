<template>
  <div class="wrap">
    <p class="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <div class="btn">用户登录</div>
  </div>
</template>

<style scoped>
  .wrap {
    background: url('../../../../public/img/index.png') no-repeat;
    background-position: 0 0;
    height: 126px;
    font-size: 12px;
    padding-top: 0;
    position: relative;
  }

  .text {
    color: #666;
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
  }

  .btn {
    background: url('../../../../public/img/index.png') no-repeat;
    background-position: 0 -195px;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    margin: 0 auto;
  }

  .btn:hover {
    background-position: -110px -195px;
    cursor: pointer;
  }
</style>
