<template>
  <div class="hot-recommend">
    <TabBar :title="title" :path="path" :tabList="tabList"></TabBar>
    <ul class="recommend-list">
      <li class="item" v-for="item in hotList" :key="item.id">
        <div class="img-wrap">
          <img :src="item.picUrl" class="auto-img">
          <i class="like" v-if="item.highQuality"></i>
          <router-link to="/" class="link-wrap"></router-link>
          <div class="bottom">
            <span class="play-btn"></span>
            <span class="icon-headset"></span>
            <span class="count">{{parseInt(item.playCount / 10000)}}万</span>
          </div>
        </div>
        <p class="title">
          <router-link to="/" class="title-text">{{item.name}}</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import TabBar from '../../../components/TabBar'

export default {
  name: 'HotRecommend',
  props: ['hotList'],
  components: {
    TabBar
  },
  data() {
    return {
      title: '热门推荐',
      path: '/discover/playlist',
      tabList: [
        {
          name: '华语',
          path: '/discover/playlist?cat=华语'
        },
        {
          name: '流行',
          path: '/discover/playlist?cat=流行'
        },
        {
          name: '摇滚',
          path: '/discover/playlist?cat=摇滚'
        },
        {
          name: '民谣',
          path: '/discover/playlist?cat=民谣'
        },
        {
          name: '电子',
          path: '/discover/playlist?cat=电子'
        },
      ]
    }
  }
}
</script>


<style scoped>
  .hot-recommend {
    position: relative;
  }

  .recommend-list {
    margin: 20px 0 0 -42px;
    overflow: hidden;
  }

  .item {
    float: left;
    width: 140px;
    height: 204px;
    overflow: hidden;
    padding: 0 0 30px 0;
    margin-left: 42px;
  }

  .img-wrap {
    width: 140px;
    height: 140px;
    position: relative;
  }

  .link-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../../../public/img/coverall.png') no-repeat;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background: url('../../../../public/img/coverall.png') no-repeat;
    background-position: 0 -537px;
    color: #ccc;
  }

  .play-btn {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background: url('../../../../public/img/iconall.png') no-repeat;
    background-position: 0 0;
  }

  .icon-headset {
    display: block;
    float: left;
    width: 14px;
    height: 11px;
    background: url('../../../../public/img/iconall.png') no-repeat;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
  }

  .count {
    float: left;
    margin-top: 8px;
    font-size: 12px;
  }

  .title {
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
  }

  .title-text {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }

  .title-text:hover {
    text-decoration: underline;
  }

  .like {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: url('../../../../public/img/icon2.png') no-repeat;
    background-position: -135px -220px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
</style>
