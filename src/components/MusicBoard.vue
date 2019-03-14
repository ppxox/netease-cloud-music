<template>
  <div class="board-list">
    <div class="top">
      <div class="top-img-wrap">
        <img
          :src="headerContent.coverImgUrl"
          class="auto-img"
        >
        <router-link to="/" class="img-cover"></router-link>
      </div>
      <div class="title">
        <router-link to="/" class="title-text">{{headerContent.name}}</router-link>
        <div class="btn-wrap">
          <span class="play"></span>
          <span class="keep"></span>
        </div>
      </div>
    </div>
    <div class="music-list-wrap">
      <ol class="music-list">
        <li class="music" v-for="(item, index) in list" :key="item.id">
          <span class="num" :style="index > 2 ? 'color: #666666' : ''">{{index + 1}}</span>
          <router-link class="name" to="/">{{item.name}}</router-link>
          <div class="music-btn-wrap">
            <span class="music-play" @click="playMusic(item.id)"></span>
            <span class="add-music-to-list"></span>
            <span class="add-keep"></span>
          </div>
        </li>
      </ol>
      <div class="more">
        <router-link to="/">查看更多&gt;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicBoard",
  props: {
    headerContent: {
      type: Object,
      default() {
        return {}
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      musicList: []
    }
  },
  methods: {
    playMusic(id) {
      let audio = this.$store.state.audio;

      this.axios.get('/api/song/detail?ids=' + id)
      .then(response => {
        let song = response.data.songs[0];
        this.$store.commit('pushMusic', song)
      })

      this.axios.get('/api/song/url?id=' + id)
      .then(response => {
        audio.pause();
        audio.src = response.data.data[0].url;
        audio.play();
        this.$store.commit('changePlaying', true)
      })
    }
  }
}
</script>


<style scoped>
.board-list {
  flex: 1;
}

.top {
  height: 100px;
  padding: 20px 0 0 19px;
}

.top-img-wrap {
  position: relative;
  width: 80px;
  height: 80px;
  float: left;
}

.img-cover {
  background: url("../../public/img/coverall.png") no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: -145px -57px;
}

.title {
  float: left;
  width: 116px;
  margin: 6px 0 0 10px;
}

.title-text {
  color: #333;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  width: 100%;
  font-weight: 700;
}

.btn-wrap {
  margin-top: 10px;
}

.play {
  background: url("../../public/img/index.png") no-repeat;
  background-position: -267px -205px;
  display: block;
  float: left;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  text-indent: -9999px;
}

.keep {
  background: url("../../public/img/index.png") no-repeat;
  background-position: -300px -205px;
  display: block;
  float: left;
  width: 22px;
  height: 22px;
  margin-right: 10px;
}

.play:hover {
  cursor: pointer;
  background-position: -267px -235px;
}

.keep:hover {
  cursor: pointer;
  background-position: -300px -235px;
}

.music-list-wrap {
  margin-top: 20px;
}

.music-list {
  height: 319px;
  margin-left: 50px;
  line-height: 32px;
}

.music {
  height: 32px;
}

.num {
  vertical-align: middle;
  float: left;
  position: relative;
  width: 35px;
  height: 32px;
  margin-left: -35px;
  text-align: center;
  color: #c10d0c;
  font-size: 16px;
}

.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #000;
  vertical-align: middle;
  float: left;
  width: 170px;
  height: 32px;
  font-size: 12px;
}

.music:hover .name {
  text-decoration: underline;
  width: 96px;
}

.music-btn-wrap {
  vertical-align: middle;
  display: none;
  float: right;
  width: 82px;
  margin-top: 7px;
}

.music:hover .music-btn-wrap {
  display: block;
}

.music-play {
  background: url("../../public/img/index.png") no-repeat;
  background-position: -267px -268px;
  float: left;
  width: 17px;
  height: 17px;
  margin-right: 10px;
}

.music-play:hover {
  background-position: -267px -288px;
  cursor: pointer;
}

.add-music-to-list {
  background: url("../../public/img/icon.png") no-repeat;
  display: block;
  overflow: hidden;
  background-position: 0 -700px;
  width: 17px;
  height: 17px;
  margin: 2px 6px 0 0;
  float: left;
}

.add-music-to-list:hover {
  background-position: -22px -700px;
  cursor: pointer;
}

.add-keep {
  background: url("../../public/img/index.png") no-repeat;
  background-position: -297px -268px;
  float: left;
  width: 17px;
  height: 17px;
  margin-right: 10px;
  display: block;
}

.add-keep:hover {
  background-position: -297px -288px;
  cursor: pointer;
}

.more {
  clear: both;
  height: 32px;
  margin-right: 32px;
  text-align: right;
  line-height: 32px;
  font-size: 12px;
}

.more:hover {
  text-decoration: underline;
}
</style>
