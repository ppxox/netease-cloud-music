<template>
  <div class="music-home">
    <NavBar></NavBar>
    <HomeBanner :list="banners"></HomeBanner>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import HomeBanner from './components/HomeBanner'

export default {
  name: 'MusicHome',
  data() {
    return {
      banners: []
    }
  },
  components: {
    NavBar,
    HomeBanner
  },
  created() {
    this.axios.get('/api/banner')
      .then(response => {
        this.banners = response.data.banners;
      })
  }
}
</script>

<style>
.auto-img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
