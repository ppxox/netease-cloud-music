<template>
  <div class="music-list">
    <ul class="list-wrap">
      <li class="item" v-for="item in musicList" :key="item.id">
        <div class="img-wrap">
          <img class="auto-img" :src="item.coverImgUrl">
          <span class="cover"></span>
          <div class="bottom">
            <span class="play-icon"></span>
            <span class="icon-headset"></span>
            <span class="num">{{(parseInt(item.playCount / 10000)) >= 10 ? (parseInt(item.playCount / 10000)) + '万' : (parseInt(item.playCount))}}</span>
          </div>
        </div>
        <p class="title">
          <a class="title-text" :title="item.name">{{item.name}}</a>
        </p>
        <p class="username">
          <span class="by">by</span>
          <a class="name">{{item.creator.nickname}}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  computed: {
    musicList() {
      return this.$store.state.playListData;
    }
  }
}
</script>

<style scoped>
  .music-list {
    position: relative;
  }

  .list-wrap {
    margin: 30px 0 0 -50px;
    overflow: hidden;
  }

  .item {
    float: left;
    display: block;
    height: 190px;
    padding: 0 0 30px 50px;
    line-height: 1.4;
    width: 189px;
    margin-bottom: 25px;
  }

  .img-wrap {
    width: 140px;
    height: 140px;
    position: relative;
  }

  .cover {
    background: url('../../../../public/img/coverall.png') no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 0 0;
  }

  .bottom{
    background: url('../../../../public/img/coverall.png') no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
  }

  .play-icon {
    background: url('../../../../public/img/iconall.png') no-repeat;
    display: inline-block;
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
  }

  .play-icon:hover {
    background-position: 0 -60px;
    cursor: pointer;
  }

  .icon-headset {
    background: url('../../../../public/img/iconall.png') no-repeat;
    display: block;
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
  }

  .num {
    float: left;
    margin-top: 7px;
    font-size: 11px;
  }

  .title {
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
  }

  .title-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
  }

  .title-text:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .username {
    width: 100%;
  }

  .by {
    font-size: 11px;
    color: #999;
    margin-right: 4px;
  }

  .name {
    color: #666;
    display: inline-block;
    vertical-align: middle;
    max-width: 76%;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .name:hover {
    text-decoration: underline;
    cursor: pointer;
  }

</style>
