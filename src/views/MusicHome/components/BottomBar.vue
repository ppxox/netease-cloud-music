<template>
  <div class="bottom-bar">
    <div class="music-list" v-show="show" @mouseenter="showBar">
      <ul>
        <li
          class="item"
          :class="{'item-active': index === $store.state.musicListIndex}"
          v-for="(item, index) in musicList"
          :key="item.id"
          @dblclick="changeMusic(item.id, index)"
        >
          <div class="name">{{item.name}}</div>
          <div class="singer">{{item.ar[0].name}}</div>
          <div class="del-btn">
            <i class="iconfont icon-shanchu" @click="removeMusic(item.id, index)"></i>
          </div>
        </li>
      </ul>
    </div>

    <div class="big-wrap" ref="bar" @mouseenter="showBar" @mouseleave="hideBar">
      <div class="wrap">
        <div class="icon-box">
          <i class="iconfont icon-shangyishou icon" @click="prevMusic"></i>
        </div>
        <div class="icon-box">
          <i class="iconfont icon-bofang icon" :class="{'icon-zanting': $store.state.playing}" @click="pauseMusic"></i>
        </div>
        <div class="icon-box">
          <i class="iconfont icon-xiayishou icon" @click="nextMusic"></i>
        </div>
        <div class="icon-box">
          <i class="iconfont icon-caidan icon" @click="showMusicList"></i>
        </div>
      </div>
    </div>

    <audio ref="audio"></audio>
  </div>
</template>

<script>

export default {
  name: "BottomBar",
  data() {
    return {
      show: false,
      barShow: false,
      musicAudio: null
    };
  },
  mounted() {
    this.musicAudio = this.$refs.audio;
    this.$store.commit("getAudio", this.$refs.audio);
  },
  computed: {
    musicList() {
      return this.$store.state.musicList;
    }
  },
  methods: {
    // 展示音乐播放列表
    showMusicList() {
      this.show = !this.show;
      let bar = this.$refs.bar;
      if (this.show) {
        this.barShow = true;
        bar.style.transform = "translateY(0)";
      } else {
        this.barShow = false;
      }
    },

    // 双击切歌，修改 vuex 中的 musicIndex
    changeMusic(id, index) {

      this.$store.commit("changeIndex", index);
      this.axios.get("/api/song/url?id=" + id).then(response => {
        let musicUrl = response.data.data[0].url;
        if (musicUrl === null) {
          this.nextMusic();
        }
        this.musicAudio.src = musicUrl;
        this.musicAudio.play();
        this.$store.commit('changePlaying', true);
      });
    },

    pauseMusic() {
      if (this.$store.state.playing) {
        this.musicAudio.pause();
        this.$store.commit('changePlaying', false);
      } else {
        this.musicAudio.play();
        this.$store.commit('changePlaying', true);
      }
    },

    // 显示音乐播放栏
    showBar() {
      let bar = this.$refs.bar;
      bar.style.transition = "all 0.2s linear";
      bar.style.transform = "translateY(0)";
    },

    // 隐藏音乐播放栏
    hideBar() {
      if (this.barShow) {
        return;
      }
      let bar = this.$refs.bar;
      bar.style.transition = "all 0.2s linear";
      bar.style.transform = "translateY(80%)";
    },

    removeMusic(id, index) {

      // 如果列表索引等于 vuex 中音乐索引
      if (index === this.$store.state.musicListIndex) {
        // 音乐暂停
        this.musicAudio.pause();
        this.$store.commit('changePlaying', false);
        // 定义一个比 musicListIndex 大 1 的值 musicIndex
        let musicIndex = this.$store.state.musicListIndex - 1;

        // 如果 musicIndex 等于 musicListIndex
        if (musicIndex === this.$store.state.musicListIndex) {
          // 获取 musicList 音乐列表音乐的 id
          let musicId = this.$store.state.musicList[musicIndex].id;
          // 获取单曲详情
          this.axios.get("/api/song/url?id=" + musicId).then(response => {
            // 获取 url
            let musicUrl = response.data.data[0].url;
            // 播放新音乐
            this.musicAudio.src = musicUrl;
            this.musicAudio.play();
            this.$store.commit('changePlaying', true);
          });
        } else {
          // 当删除最后一首正在播放中的音乐，创建一个比 musicListIndex 小 1 的值
          let musicIndex = this.$store.state.musicListIndex - 1;

          if (musicIndex < 0) {
            musicIndex = 0;
            this.$store.commit("remodeMusic", id);
            if (this.$store.state.musicList.length === 0) {
              return
            }
          }

          // 获取音乐 id
          let musicId = this.$store.state.musicList[musicIndex].id;

          // 修改 musicIndex 的值
          this.$store.commit('changeIndex', musicIndex);

          // 获取音乐地址(url)并播放
          this.axios.get("/api/song/url?id=" + musicId).then(response => {
            let musicUrl = response.data.data[0].url;
            this.musicAudio.src = musicUrl;
            this.musicAudio.play();
            this.$store.commit('changePlaying', true);
          });
        }

        // 从列表中删除 id 相同的这首歌曲
        this.$store.commit("remodeMusic", id);

      // 如果渲染列表索引小于 musicListIndex 就让 musicListIndex 的值减 1,控制播放中状态的样式
      } else if (index < this.$store.state.musicListIndex) {
        this.$store.commit('lessMusicIndex');
      }



      // 如果音乐列表的歌等于零，暂停音乐并把 ended 监听删除
      if (this.$store.state.musicList.length === 0) {
        this.musicAudio.pause();
        this.$store.commit('changePlaying', false);
        this.musicAudio.src = null;
        removeEventListener("ended", this.$store.state.endedListener);
        this.$store.commit('changeEndedListener', null);
      }

    },

    // 上一首
    prevMusic() {
      this.$store.commit("lessMusicIndex");

      let index = this.$store.state.musicListIndex;
      let id = this.$store.state.musicList[index].id;

      this.axios.get("/api/song/url?id=" + id).then(response => {
        let musicUrl = response.data.data[0].url;
        if (musicUrl === null) {
          this.prevMusic();
        }
        this.musicAudio.src = musicUrl;
        this.musicAudio.play();
        this.$store.commit('changePlaying', true);
      });
    },

    // 下一首
    nextMusic() {
      this.$store.commit("addMusicIndex");

      let index = this.$store.state.musicListIndex;
      let id = this.$store.state.musicList[index].id;

      this.axios.get("/api/song/url?id=" + id).then(response => {
        let musicUrl = response.data.data[0].url;
        if (musicUrl === null) {
          this.nextMusic();
        }
        this.musicAudio.src = musicUrl;
        this.musicAudio.play();
        this.$store.commit('changePlaying', true);
      });
    }
  }
};
</script>


<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.music-list {
  height: 260px;
  width: 553px;
  background: #333;
  margin-left: 170px;
  overflow: auto;
  border-radius: 2px 2px 0 0;
}

.music-list::-webkit-scrollbar {
  width: 5px;
  height: 16px;
  border-radius: 0 2px 0 0;
  background-color: #191919;
}

.music-list::-webkit-scrollbar-thumb {
  border-radius: 0 2px 0 0;
  background-color: #333;
}

.music-list li {
  overflow: hidden;
}

.item {
  float: left;
  display: flex;
  width: 100%;
  height: 28px;
}

.item:hover {
  background: #191919;
  cursor: pointer;
}

.item-active {
  background: #191919;
}

.name,
.singer,
.del-btn {
  flex: 1;
  font-size: 12px;
  line-height: 28px;
  padding: 0 5px;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.singer,
.del-btn {
  color: #aaaaaa;
}

.del-btn:hover {
  color: #ffffff;
}

.big-wrap {
  background: #333;
  height: 50px;
  transform: translateY(80%);
}

.wrap {
  width: 980px;
  height: 100%;
  margin: 0 auto;
}

.icon-box {
  width: 50px;
  height: 50px;
  display: inline-block;
}

.icon {
  font-size: 30px;
  line-height: 50px;
  color: #aaaaaa;
}

.icon:hover {
  color: #ffffff;
  cursor: pointer;
}
</style>
