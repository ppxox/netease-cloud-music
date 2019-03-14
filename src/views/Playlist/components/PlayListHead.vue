<template>
  <div class="play-list-head">
    <div class="wrap">
      <div class="head">
        <h3>
          <span>全部</span>
          <span class="type-btn">选择分类</span>
        </h3>
        <div class="right-wrap">
          <a class="hot">热门</a>
          <a class="new">最新</a>
        </div>
      </div>

      <div class="show">
        <div class="show-head">
          <span class="head-icon"></span>
        </div>
        <div class="show-body">

          <h3><span>全部风格</span></h3>

          <div class="row">
            <div class="col-1">
              <span class="icon-1"></span>语种</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlayListHead',
  data() {
    return {

    }
  },
  created() {
  }
}
</script>

<style scoped>
  .play-list-head {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }

  .wrap {
    padding: 40px;
    position: relative;
  }

  .head {
    height: 40px;
    position: relative;
    border-bottom: 2px solid #c20c0c;
  }

  .head h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }

  .type-btn {
    font-size: 12px;
    width: 86px;
    height: 31px;
    text-align: center;
    border: 1px solid #c4c4c4;
    display: inline-block;
    line-height: 31px;
    border-radius: 5px;
    margin-left: 10px;
    position: absolute;
    top: 0;
    background: #f9f9f9;
    color: #0c73c2;
  }

  .type-btn:hover {
    background: #fff;
    cursor: pointer;
  }

  .right-wrap {
    background: url('../../../../public/img/button.png') no-repeat;
    float: right;
    width: 93px;
    height: 29px;
    background-position: 0 0;
  }

  .hot {
    font-size: 12px;
    float: left;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    color: #fff;
  }

  .new {
    font-size: 12px;
    color: #333;
    float: left;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
  }

  .hot:hover,
  .new:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .show {
    position: absolute;
    top: 75px;
    z-index: 5;
    width: 720px;
    display: block;
    left: 0;
    font-size: 12px;
  }

  .show-head {
    height: 32px;
    background: url('../../../../public/img/sltlyr.png') no-repeat;
  }

  .head-icon {
    background: url('../../../../public/img/iconall.png') no-repeat;
    position: absolute;
    top: 2px;
    left: 132px;
    display: inline-block;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
    vertical-align: middle;
  }

  .show-body {
    background: url('../../../../public/img/sltlyr.png') repeat-y;
    padding: 0 10px;
    background-position: -720px 0;
  }

  .show-body h3 {
    height: 37px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;
    color: #333;
  }

  .show-body h3 span {
    width: 75px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    display: inline-block;
    background: url('../../../../public/img/button.png') no-repeat;
    background-position: 0 -64px;
  }

  .show-body h3 span:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .row {
    display: flex;
    position: relative;
    margin-top: 10px;
  }

  .col-1 {
    flex: 0 0 71px;
    margin-left: 26px;
  }

  .icon-1 {
    background: url('../../../../public/img/icon.png') no-repeat;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    width: 23px;
    height: 23px;
    background-position: -20px -735px;
    margin-right: 8px;
    margin-bottom: 4px;
  }
</style>
