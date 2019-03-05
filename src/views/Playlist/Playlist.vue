<template>
  <div class="play-list">
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'

export default {
  name: 'Playlist',
  components: {
    NavBar
  },
  created() {
    // eslint-disable-next-line
    // console.log(this.$route)
  }
}
</script>
