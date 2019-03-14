<template>
  <div class="music-list">
    <div class="music-list-title">
      <h3>歌曲列表</h3>
      <span class="music-num">{{musicNum}}首歌</span>
      <div class="wrap">播放：<span class="play-count">{{playCount}}</span>次</div>
    </div>

    <div class="list">
      <div class="sort"></div>
      <div class="name">标题</div>
      <div class="time">时长</div>
      <div class="singer">歌手</div>
    </div>

    <div
      class="item"
      :class="{'other-item': i >= 3, 'bg-color-gray': (i % 2) === 0}"
      v-for="(item, i) in musicList"
      :key="item.id"
    >
      <div
        class="item-sort"
        :class="{'other-sort': i >= 3}"
      >{{i + 1}}</div>
      <div class="item-name" :class="{'other-name': i >= 3}">
        <div class="item-name-wrap">
          <div class="img-box" v-if="i < 3">
            <img :src="item.al.picUrl" class="auto-img">
          </div>
          <div class="display-none" v-else></div>
          <span class="icon" :class="{'other-icon': i >= 3}" @click="playMusic(item.id)"></span>
          <span class="music-name" :class="{'other-name': i >= 3}">{{item.name}}</span>
        </div>
      </div>
      <div class="item-time" :class="{'other-time': i >= 3}">
        <span class="time-text">
          {{ (item.dt / 1000 / 60) > 10 ? Math.floor(item.dt / 1000 / 60) : '0' + Math.floor(item.dt / 1000 / 60) }}:{{ (item.dt / 1000 % 60) > 10 ? Math.floor(item.dt / 1000 % 60) : '0' + Math.floor(item.dt / 1000 % 60) }}
        </span>
        <span class="btn">
          <span class="icon-1"></span>
          <span class="icon-2"></span>
          <span class="icon-3"></span>
          <span class="icon-4"></span>
        </span>
      </div>
      <div class="item-singer" :class="{'other-singer': i >= 3}">
        <span class="singer-text">{{item.ar[0].name}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MusicList",
  computed: {
    musicList() {
      let data = this.$store.state.topListData.data.playlist.tracks;
      return data;
    },
    musicNum() {
      let num = this.$store.state.topListData.data.playlist.tracks.length;
      return num;
    },
    playCount() {
      let playCount = this.$store.state.topListData.data.playlist.playCount;
      return playCount;
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
  .music-list {
    padding: 0 30px 40px 40px;
  }

  .music-list-title {
    height: 33px;
    border-bottom: 2px solid #c20c0c;
  }

  .music-list-title h3 {
    font-size: 20px;
    line-height: 28px;
    float: left;
    font-weight: normal;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .music-num {
    margin: 9px 0 0 20px;
    float: left;
    color: #666;
    font-size: 12px;
  }

  .wrap {
    margin-top: 5px;
    float: right;
    color: #666;
    font-size: 12px;
  }

  .play-count {
    color: #c20c0c;
    font-weight: bold;
  }

  .list {
    position: relative;
    display: flex;
    height: 38px;
    justify-content: center;
    background: url('../../../../public/img/table.png') repeat-x;
  }

  .list div {
    font-size: 12px;
    line-height: 38px;
    color: #666;
  }

  .sort {
    flex: 0 0 77px;
    width: 77px;
  }

  .name {
    flex: 0 0 407px;
    width: 407px;
  }

  .time {
    flex: 0 0 90px;
    width: 90px;
  }

  .singer {
    flex: 0 0 93px;
    width: 93px;
  }

  .item {
    position: relative;
    display: flex;
    height: 69px;
    justify-content: center;
    font-size: 12px;
  }

  .other-item {
    height: 35px;
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 12px;
    background-color: #ffffff;
  }

  .item-sort {
    flex: 0 0 77px;
    width: 77px;
    padding: 6px 10px;
    line-height: 57px;
    color: #999;
  }

  .other-sort {
    flex: 0 0 77px;
    width: 77px;
    padding: 6px 10px;
    line-height: 26px;
    color: #999;
  }

  .item-name {
    flex: 0 0 407px;
    width: 407px;
    line-height: 50px;
  }

  .other-name {
    line-height: 26px;
  }

  .item-time {
    flex: 0 0 90px;
    width: 90px;
    line-height: 69px;
  }

  .other-time {
    line-height: 38px;
  }

  .item-singer {
    flex: 0 0 93px;
    width: 93px;
    line-height: 69px;
  }

  .other-singer {
    line-height: 35px;
  }

  .item-name-wrap {
    padding: 6px 10px;
    overflow: hidden;
  }

  .img-box {
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 14px;
  }

  .icon {
    background: url('../../../../public/img/table.png') no-repeat;
    background-position: 0 -103px;
    width: 17px;
    height: 17px;
    cursor: pointer;
    float: left;
    margin-right: 8px;
    margin-top: 17px;
    display: block;
  }

  .other-icon {
    margin-top: 4px;
  }

  .icon:hover {
    background-position: 0 -128px;
  }

  .music-name {
    color: #333;
  }

  .music-name:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .item-time {
    color: #666;
  }

  .btn {
    display: none;
    position: relative;
    top: 4px;
  }

  .btn span {
    float: left;
    width: 18px;
    height: 16px;
    margin: 2px 0 0 4px;
    overflow: hidden;
    cursor: pointer;
    background: url('../../../../public/img/table.png') no-repeat;
  }

  .btn .icon-1 {
    width: 13px;
    height: 13px;
    background: url('../../../../public/img/icon.png') no-repeat;
    background-position: 0 -700px;
  }

  .btn .icon-1:hover {
    background-position: -22px -700px;
  }

  .btn .icon-2{
    background-position: 0 -174px;
  }

  .btn .icon-2:hover {
    background-position: -20px -174px;
  }

  .btn .icon-3 {
    background-position: 0 -195px;
  }

  .btn .icon-3:hover {
    background-position: -20px -195px;
  }

  .btn .icon-4 {
    background-position: -81px -174px;
  }

  .btn .icon-4:hover {
    background-position: -104px -174px;
  }

  .item:hover .btn {
    display: inline-block;
  }

  .item:hover .time-text {
    display: none;
  }

  .item-singer {
    color: #333;
  }

  .singer-text {
    width: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .singer-text:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .display-none {
    display: none;
  }

  .bg-color-gray {
    background: #f7f7f7;
  }

  .bg-color-white {
    background: #ffffff;
  }
</style>
