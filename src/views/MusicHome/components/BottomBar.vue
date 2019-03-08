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
          <i class="iconfont icon-bofang icon"></i>
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
      barShow: false
    };
  },
  mounted() {
    this.$store.commit("getAudio", this.$refs.audio);
  },
  computed: {
    musicList() {
      return this.$store.state.musicList;
    }
  },
  methods: {
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

    changeMusic(id, index) {
      let musicAudio = this.$store.state.audio;
      this.$store.commit("changeIndex", index);
      this.axios.get("/api/song/url?id=" + id).then(response => {
        let musicUrl = response.data.data[0].url;
        musicAudio.src = musicUrl;
        musicAudio.play();
      });
    },

    showBar() {
      let bar = this.$refs.bar;
      bar.style.transition = "all 0.2s linear";
      bar.style.transform = "translateY(0)";
    },

    hideBar() {
      if (this.barShow) {
        return;
      }
      let bar = this.$refs.bar;
      bar.style.transition = "all 0.2s linear";
      bar.style.transform = "translateY(80%)";
    },

    removeMusic(id, index) {
      if (index < this.$store.state.musicListIndex) {
        this.$store.commit('lessMusicIndex');
      }
      this.$store.commit("remodeMusic", id);
      let musicAudio = this.$store.state.audio;
      if (this.$store.state.musicList.length === 0) {
        musicAudio.pause();
        musicAudio.src = null;
        removeEventListener("ended", this.$store.state.endedListener);
      }
    },

    prevMusic() {
      this.$store.commit("lessMusicIndex");

      let audio = this.$store.state.audio;
      let index = this.$store.state.musicListIndex;
      let id = this.$store.state.musicList[index].id;

      this.axios.get("/api/song/url?id=" + id).then(response => {
        let musicUrl = response.data.data[0].url;
        audio.src = musicUrl;
        audio.play();
      });
    },

    nextMusic() {
      this.$store.commit("addMusicIndex");

      let audio = this.$store.state.audio;
      let index = this.$store.state.musicListIndex;
      let id = this.$store.state.musicList[index].id;

      this.axios.get("/api/song/url?id=" + id).then(response => {
        let musicUrl = response.data.data[0].url;
        audio.src = musicUrl;
        audio.play();
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
