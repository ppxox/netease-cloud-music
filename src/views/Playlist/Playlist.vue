<template>
  <div class="play-list">
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'

export default {
  name: 'Playlist',
  data() {
    return {

    }
  },
  components: {
    NavBar
  },
  created() {
    // let id = this.$route.query.id;

    // this.axios.get('/api/playlist/detail?id=' + id)
    // .then(response => {
    // })
  }
}
</script>
