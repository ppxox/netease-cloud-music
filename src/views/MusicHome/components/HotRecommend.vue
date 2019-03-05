<template>
  <div class="hot-recommend">
    <TabBar :title="title" :path="path" :tabList="tabList"></TabBar>
    <ul class="recommend-list">
      <li class="item"></li>
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
    width: 100%;
  }
</style>
