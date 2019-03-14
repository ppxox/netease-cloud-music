<template>
  <div class="review">
    <div class="review-wrap">
      <div class="title">
        <span class="title-text">评论</span>
        <span class="number">共{{reviewNum}}条评论</span>
      </div>
      <div class="review-list">
        <div class="review-input">
          <div class="head">
            <img src="../../../../public/img/default_avatar.jpg" class="auto-img">
          </div>
          <div class="input">
            <div class="text-wrap">
              <textarea placeholder="评论"></textarea>
            </div>
            <div class="btn-wrap">
              <i class="icon-1"></i>
              <i class="icon-2"></i>
              <div class="btn">评论</div>
              <span class="last">139</span>
            </div>
          </div>
        </div>

        <!-- 精彩评论 -->
        <div class="hot-review" v-show="!hotList">
          <h3 >精彩评论</h3>
          <div class="hot-review-wrap" :class="{'none-top-border': index === 0}" v-for="(item, index) in hotList" :key="item.commentId">
            <div class="head-wrap">
              <img :src="item.user.avatarUrl" class="auto-img">
            </div>
            <div class="hot-text-wrap">
              <div class="top">
                <span class="username">{{item.user.nickname}}</span>：{{item.content}}
              </div>
              <div class="bottom">
                <div class="time">{{new Date(item.time).getHours()}}:{{new Date(item.time).getMinutes()}}</div>
                <div class="praise"></div>
                 ({{item.likedCount}})
                 <span>|</span>
                 <a>回复</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 最新评论 -->
        <div class="hot-review">
          <h3>最新评论({{reviewNum}})</h3>
          <div class="hot-review-wrap" :class="{'none-top-border': index === 0}" v-for="(item, index) in newList" :key="item.commentId">
            <div class="head-wrap">
              <img :src="item.user.avatarUrl" class="auto-img">
            </div>
            <div class="hot-text-wrap">
              <div class="top">
                <span class="username">{{item.user.nickname}}</span>：{{item.content}}
              </div>
              <div class="bottom">
                <div class="time">{{new Date(item.time).getHours()}}:{{new Date(item.time).getMinutes()}}</div>
                <div class="praise"></div>
                 ({{item.likedCount}})
                 <span>|</span>
                 <a>回复</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  computed: {
    hotList() {
      let list = this.$store.state.reviewData.hotComments;
      return list;
    },
    newList() {
      let list = this.$store.state.reviewData.comments;
      return list;
    },
    reviewNum() {
      let total = this.$store.state.reviewData.total;
      return total;
    }
  }
}
</script>

<style scoped>
  .review {
    position: relative;
  }

  .review-wrap {
    padding: 0 30px 40px 40px;
    width: 740px;
  }

  .title {
    height: 33px;
    border-bottom: 2px solid #c20c0c;
  }

  .title-text {
    font-size: 20px;
    line-height: 28px;
  }

  .number {
    margin: 9px 0 0 20px;
    color: #666;
    font-size: 12px;
  }

  .review-list {
    margin-top: 20px;
  }

  .review-input {
    margin-bottom: 20px;
    overflow: hidden;
  }

  .head {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: -100px;
  }

  .input {
    width: 90%;
    margin-left: 62px;
    float: left;
    position: relative;
  }

  .text-wrap {
    position: relative;
    padding-left: 14px;
  }

  .text-wrap textarea {
    font-size: 11px;
    height: 50px;
    display: block;
    width: 100%;
    margin-right: -20px;
    margin: 0;
    padding: 5px 6px 6px;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    line-height: 19px;
    resize: none;
    overflow: auto;
  }

  .btn-wrap {
    position: relative;
    clear: both;
    padding-top: 10px;
  }

  .icon-1 {
    background: url('../../../../public/img/icon.png') no-repeat;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    background-position: -40px -490px;
    margin: 0px 10px 0 15px;
    cursor: pointer;
  }

  .icon-2 {
    background: url('../../../../public/img/icon.png') no-repeat;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    background-position: -60px -490px;
    margin: 0px 10px 0 0;
    cursor: pointer;
  }

  .btn {
    float: right;
    width: 46px;
    height: 25px;
    color: #fff;
    text-align: center;
    line-height: 25px;
    background-color: #3080cc;
    font-size: 12px;
    border-radius: 3px;
  }

  .btn:hover {
    background-color: #539de2;
    cursor: pointer;
  }

  .last {
    font-size: 11px;
    float: right;
    color: #666;
    line-height: 28px;
    margin-right: 5px;
  }

  .hot-review h3 {
    position: relative;
    top: 1px;
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
    font-size: 75%;
  }

  .hot-review-wrap {
    padding: 15px 0;
    border-top: 1px dotted #ccc;
    overflow: hidden;
  }

  .none-top-border {
    border-top: none;
  }

  .head-wrap {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: -100px;
  }

  .hot-text-wrap {
    margin-left: 60px;
  }

  .top {
    font-size: 12px;
    word-break: break-word;
    width: 100%;
    overflow: hidden;
    line-height: 20px;
    white-space: normal;
  }

  .username {
    color: #0c73c2;
    margin-right: 5px;
    cursor: pointer;
  }

  .username:hover {
    text-decoration: underline;
  }

  .bottom {
    margin-top: 15px;
    text-align: right;
    font-size: 12px;
    color: #333;
  }

  .time {
    float: left;
    margin: 0 !important;
    font-size: 12px;
    color: #999;
    line-height: 18px;
  }

  .praise {
    background: url('../../../../public/img/icon2.png') no-repeat;
    display: inline-block;
    overflow: hidden;
    width: 15px;
    height: 14px;
    background-position: -150px 0;
    margin-top: -4px;
    margin-right: 5px;
    vertical-align: -2px;
  }

  .praise:hover {
    background-position: -150px -20px;
    cursor: pointer;
  }

  .bottom span {
    margin: 0 8px;
    margin-top: -2px;
    color: #ccc;
  }

  .bottom a {
    color: #666;
  }

  .bottom a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
