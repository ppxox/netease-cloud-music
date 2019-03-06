<template>
  <div class="leaderboard">
    <TabBar :title="title" :path="path"></TabBar>
    <div class="wrap">
      <div class="board-list">
        <div class="top">
          <div class="top-img-wrap">
            <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" class="auto-img">
            <router-link to="/" class="img-cover"></router-link>
          </div>
          <div class="title">
            <router-link to="/" class="title-text">云音乐飙升榜</router-link>
            <div class="btn-wrap">
              <span class="play"></span>
              <span class="keep"></span>
            </div>
          </div>
        </div>
        <div class="music-list-wrap">
          <ol class="music-list">
            <li class="music">
              <span class="num">1</span>
              <router-link class="name" to="/">关于孤独我想说的话</router-link>
              <div class="music-btn-wrap">
                <span class="music-play"></span>
                <span class="add-music-to-list"></span>
                <span class="add-keep"></span>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div class="board-list"></div>

      <div class="board-list"></div>
    </div>
  </div>
</template>

<script>
import TabBar from '../../../components/TabBar'

export default {
  name: 'Leaderboard',
  props: {
    upBoard: {
      type: Object,
      default() {
        return []
      }
    },
    newBoard: {
      type: Object,
      default() {
        return []
      }
    },
    originalBoard: {
      type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      title: "榜单",
      path: '/discover/toplist',
      musicList: []
    }
  },
  components: {
    TabBar
  },
  mounted() {
    console.log(this.upBoard, this.newBoard, this.originalBoard);
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
    background: url('../../../../public/img/coverall.png') no-repeat;
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
    background: url('../../../../public/img/index.png') no-repeat;
    background-position: -267px -205px;
    display: block;
    float: left;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    text-indent: -9999px;
  }

  .keep {
    background: url('../../../../public/img/index.png') no-repeat;
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
    background: url('../../../../public/img/index.png') no-repeat;
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
    background: url('../../../../public/img/icon.png') no-repeat;
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
    background: url('../../../../public/img/index.png') no-repeat;
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
</style>

