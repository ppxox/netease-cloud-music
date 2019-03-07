<template>
  <div class="bottom">
    <div class="bottom-wrap">
      <div class="copy">
        <p class="link">
          <a>关于网易</a>
          <span>|</span>
          <a>客户服务</a>
          <span>|</span>
          <a>服务条款</a>
          <span>|</span>
          <a>网站导航</a>
          <span>|</span>
          <a>意见反馈</a>
        </p>
        <p>
          <span class="span-1">网易公司版权所有©1997-2019</span>
          <span class="span-2">杭州乐读科技有限公司运营：</span>
          <span class="span-3">浙网文[2018]3506-263号</span>
        </p>
        <p>
          <span class="span-1">违法和不良信息举报电话：0571-89853516</span>
          <span class="span-2">举报邮箱：</span>
          <span class="span-3">ncm5990@163.com</span>
        </p>
      </div>
      <ul class="icon-list">
        <li>
          <span class="icon icon-1"></span>
          <span class="icon-title icon-title-1"></span>
        </li>
        <li>
          <span class="icon icon-2"></span>
          <span class="icon-title icon-title-2"></span>
        </li>
        <li>
          <span class="icon icon-3"></span>
          <span class="icon-title icon-title-3"></span>
        </li>
        <li>
          <span class="icon icon-4"></span>
          <span class="icon-title icon-title-4"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .bottom {
    font-size: 11px;
    position: relative;
    height: 148px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }

  .bottom-wrap {
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
  }

  .copy {
    float: left;
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
  }

  .link {
    color: #999;
  }

  .link span {
    margin: 0 8px 0 10px;
    color: #c2c2c2;
  }

  .link a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .span-1 {
    margin-right: 14px;
    color: #666;
  }

  .span-2,
  .span-3 {
    color: #666;
  }

  .span-3:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .icon-list {
    width: 330px;
    margin-top: 21px;
    float: right;
  }

  .icon-list li {
    margin-left: 0;
    float: left;
    width: 60px;
    height: 70px;
    text-align: center;
    color: #666;
    cursor: pointer;
  }

  .icon {
    background: url('../../../../public/img/foot_enter_new.png') no-repeat;
    display: block;
    float: none;
    width: 50px;
    height: 45px;
    margin: 0 auto;
    background-size: 110px 450px;
  }

  .icon-1 {
    background-position: -63px -101px;
  }

  .icon-2 {
    background-position: 0 0;
  }

  .icon-3 {
    background-position: -60px -50px;
  }

  .icon-4 {
    background-position: 0 -101px;
  }

  .icon-title {
    background: url('../../../../public/img/foot_enter_tt.png') no-repeat;
    background-size: 180px 100px;
    display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
  }

  .icon-title-1 {
    background-position: -1px -91px;
  }

  .icon-title-2 {
    background-position: 0 0;
  }

  .icon-title-3 {
    background-position: 0 -54px;
  }

  .icon-title-4 {
    background-position: -1px -72px;
  }
</style>
