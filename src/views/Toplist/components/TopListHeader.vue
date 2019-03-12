<template>
  <div class="header">
    <div class="header-wrap">
      <div class="img-box">
        <img
          class="auto-img"
          :src="list.coverImgUrl"
        >
        <span class="cover"></span>
      </div>
      <div class="content">
        <div class="content-wrap">
          <div class="content-title">{{list.name}}</div>
          <div class="recent">
            <i class="icon"></i>
            <span class="updated">最近更新：{{month}}月{{day}}日</span>
            <span class="update-time">（{{updated}}）</span>
          </div>
          <div class="button-list">
            <span class="play-wrap">
              <i>
                <em class="play"></em>
                播放
              </i>
            </span>
            <span class="add-btn"></span>
            <span class="collect-btn">
              <i>({{list.subscribedCount}})</i>
            </span>
            <span class="share-btn">
              <i>({{list.shareCount}})</i>
            </span>
            <span class="download-btn">
              <i>下载</i>
            </span>
            <span class="comment-btn">
              <i>({{list.commentCount}})</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopListHeader",
  computed: {
    list() {
      let list = this.$store.state.topListData.data.playlist;
      return list
    },
    month() {
      let time = this.list.trackUpdateTime;
      let month = new Date(time).getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      return month
    },
    day() {
      let time = this.list.trackUpdateTime;
      let day = new Date(time).getDate();
      if (day < 10) {
        day = '0' + day;
      }
      return day
    },
    updated() {
      let item = this.$store.state.topListData.text;
      return item;
    }
  }
};
</script>

<style scoped>
  .header {
    padding: 40px;
  }

  .header-wrap {
    position: relative;
  }

  .img-box {
    width: 150px;
    height: 150px;
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    display: inline-block;
    margin: 0 -220px 0 0;
  }

  .cover {
    background: url("../../../../public/img/coverall.png") no-repeat;
    width: 150px;
    height: 150px;
    background-position: -230px -380px;
    top: 3px;
    left: 3px;
    display: block;
    position: absolute;
  }

  .content {
    float: right;
    width: 100%;
  }

  .content-wrap {
    margin-left: 187px;
  }

  .content-title {
    margin: 16px 0 4px;
    position: relative;
    line-height: 24px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
  }

  .recent {
    margin: 0 0 20px;
    line-height: 35px;
  }

  .icon {
    font-style: normal;
    text-align: left;
    font-size: inherit;
    background: url("../../../../public/img/icon.png") no-repeat;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    width: 13px;
    height: 13px;
    background-position: -18px -682px;
    margin: 9px 0 0 3px;
  }

  .updated {
    line-height: 35px;
    color: #666;
    margin-left: 5px;
    font-size: 12px;
    position: relative;
    top: 4px;
  }

  .update-time {
    color: #999;
    line-height: 35px;
    font-size: 12px;
    position: relative;
    top: 4px;
  }

  .button-list {
    margin-bottom: 25px;
    margin-right: -10px;
  }

  .play-wrap, .play-wrap i {
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    display: inline-block;
    padding: 0 5px 0 0;
    white-space: nowrap;
    text-decoration: none;
    color: #fff;
    background: url('../../../../public/img/button2.png') no-repeat;
    background-position: right -428px;
    float: left;
  }

  .play-wrap i {
    color: #fff;
    background-position: 0 -387px;
    padding: 0 7px 0 8px;
    font-style: normal;
    font-size: 12px;
  }

  .play {
    cursor: pointer;
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    width: 20px;
    height: 18px;
    margin: 6px 2px 2px 0;
    background-position: 0 -1622px;
    overflow: hidden;
  }

  .add-btn {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 5px 0 0;
    white-space: nowrap;
    width: 31px;
    margin-left: -3px;
    padding-right: 0;
    background-position: 0 -1588px;
    font-family: simsun,\5b8b\4f53;
    margin-right: 5px;
  }

  .collect-btn {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 5px 0 0;
    white-space: nowrap;
    background-position: right -1020px;
    margin-right: 6px;
    font-family: simsun,\5b8b\4f53;
  }

  .collect-btn i {
    background: url('../../../../public/img/button2.png') no-repeat;
    background-position: 0 -977px;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 7px 0 36px;
    padding-right: 2px;
    padding-left: 28px;
    font-size: 12px;
  }

  .share-btn {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 5px 0 0;
    white-space: nowrap;
    background-position: right -1020px;
    margin-right: 6px;
    font-family: simsun,\5b8b\4f53;
  }

  .share-btn i {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 7px 0 36px;
    padding-right: 2px;
    padding-left: 28px;
    background-position: 0 -1225px;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    font-size: 12px;
  }

  .download-btn {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 5px 0 0;
    white-space: nowrap;
    background-position: right -1020px;
    margin-right: 6px;
    font-family: simsun,\5b8b\4f53;
    font-size: 12px;
  }

  .download-btn i {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    padding: 0 7px 0 36px;
    padding-right: 2px;
    padding-left: 28px;
    background-position: 0 -2761px;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
  }

  .comment-btn {
    background: url('../../../../public/img/button2.png') no-repeat;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 5px 0 0;
    white-space: nowrap;
    background-position: right -1020px;
    margin-right: 6px;
    font-family: simsun,\5b8b\4f53;
    font-size: 12px;
  }

  .comment-btn i {
    background: url('../../../../public/img/button2.png') no-repeat;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    padding: 0 7px 0 36px;
    padding-right: 2px;
    padding-left: 28px;
    background-position: 0 -1465px;
  }
</style>
