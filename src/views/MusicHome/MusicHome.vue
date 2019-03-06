<template>
  <div class="music-home">
    <NavBar></NavBar>
    <HomeBanner :list="banners"></HomeBanner>
    <div class="home-body">
      <div class="body-left">
        <HotRecommend :hotList="hotList"></HotRecommend>
        <NewShelf></NewShelf>
      </div>
      <div class="body-right"></div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import HomeBanner from './components/HomeBanner'
import HotRecommend from './components/HotRecommend'
import NewShelf from './components/NewShelf'

export default {
  name: 'MusicHome',
  data() {
    return {
      banners: [],
      hotList: []
    }
  },
  components: {
    NavBar,
    HomeBanner,
    HotRecommend,
    NewShelf
  },
  created() {
    // 轮播图
    this.axios.get('/api/banner')
    .then(response => {
      this.banners = response.data.banners;
    });

    // 热门推荐
    this.axios.get('/api/personalized')
    .then(response => {
      let data = response.data;
      if (data.code === 200) {
        this.hotList = data.result.slice(0, 8);
      }
    });
  }
}
</script>

<style>
.auto-img {
  width: 100%;
  height: 100%;
  display: block;
}

.music-home {
  width: 100%;
  position: relative;
  background-color: #f5f5f5;
}

.home-body {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
}

.body-left {
  flex: 0 0 729px;
  background: #fff;
  padding: 20px 20px 40px;
}

.body-right {
  flex: 1;
  background: #fff;
}
</style>
