<template>
  <div class="hot-recommend">
    <TabBar :title="title" :path="path" :tabList="tabList"></TabBar>
    <ul class="recommend-list">
      <li class="item">
        <div class="img-wrap">
          <img src="http://p1.music.126.net/D-TvG1LXc8mx_wvaHVVUjQ==/109951163903856167.jpg?param=140y140" class="auto-img">
          <router-link to="/" class="link-wrap"></router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TabBar from '../../../components/TabBar'

export default {
  name: 'HotRecommend',
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
</style>
