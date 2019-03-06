<template>
  <div class="leaderboard">
    <TabBar :title="title" :path="path"></TabBar>
    <div class="wrap">
      <MusicBoard :headerContent="upBoard.playlist" :list="upMusicList"></MusicBoard>
      <MusicBoard :headerContent="newBoard.playlist" :list="newMusicList"></MusicBoard>
      <MusicBoard :headerContent="originalBoard.playlist" :list="originalMusicList"></MusicBoard>
    </div>
  </div>
</template>

<script>
import TabBar from '../../../components/TabBar'
import MusicBoard from '../../../components/MusicBoard'

export default {
  name: 'Leaderboard',
  data() {
    return {
      title: "榜单",
      path: '/discover/toplist',
      upMusicList: [],
      upBoard: {},
      newMusicList: [],
      newBoard: {},
      originalMusicList: [],
      originalBoard: {},
    }
  },
  components: {
    TabBar,
    MusicBoard
  },
  created() {
    // 云音乐飙升榜
    this.axios.get('/api/top/list?idx=3')
    .then(response => {
      let data = response.data;
      this.upMusicList = data.playlist.tracks.slice(0, 10);
      this.upBoard = data;
    })

    // 新歌榜
    this.axios.get('/api/top/list?idx=0')
    .then(response => {
      let data = response.data;
      this.newMusicList = data.playlist.tracks.slice(0, 10);
      this.newBoard = data;
    })

    // 原创版
    this.axios.get('/api/top/list?idx=2')
    .then(response => {
      let data = response.data;
      this.originalMusicList = data.playlist.tracks.slice(0, 10);
      this.originalBoard = data;
    })
  }
}
</script>

<style scoped>
  .leaderboard {
    position: relative;
  }

  .wrap {
    display: flex;
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    background: url('../../../../public/img/index_bill.png') no-repeat;
  }
</style>

