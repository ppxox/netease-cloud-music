<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
    <HomeBottom></HomeBottom>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import HomeBottom from './components/HomeBottom'
import BottomBar from './components/BottomBar'

export default {
  name: 'MusicHome',
  components: {
    NavBar,
    HomeBottom,
    BottomBar
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
