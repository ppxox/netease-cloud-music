<template>
  <div class="play-list">
    <PlayListHead/>
    <MusicList v-if="show"/>
    <div v-else></div>
    <PlayListPager/>
  </div>
</template>

<script>
import PlayListHead from "./components/PlayListHead";
import MusicList from "./components/MusicList";
import PlayListPager from "./components/PlayListPager";

export default {
  name: 'Playlist',
  data() {
    return {
      show: false
    }
  },
  components: {
    PlayListHead,
    MusicList,
    PlayListPager
  },
  created() {
    this.axios.get('/api/top/playlist?limit=35&order=hot')
    .then(response => {

      let data = response.data.playlists;
      let total = response.data.total;
      this.$store.commit('changeTotalMusicList', total);
      this.$store.commit('changePlayListData', data);

      if (this.$store.state.playListData) {
        this.show = true;
      }

    })
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('changeTypeName', '全部');
    this.$store.commit('changeTotalMusicList', null);
    this.$store.commit('changePagerIndex', 0);
    this.$store.commit('changepageNum', 1);
    next();
  }
}
</script>

<style scoped>
  .play-list {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    padding: 40px;
    position: relative;
  }
</style>
