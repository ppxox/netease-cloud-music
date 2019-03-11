<template>
  <div class="new-shelf">
    <TabBar :title="title" :path="path"></TabBar>
    <div class="banner">
      <div class="banner-wrap">
        <div class="cover-wrap">
          <div class="ul-wrap" ref="ulWrap">
            <ul class="list" v-for="(list, index) in newShelfList" :key="index">
              <li class="item" v-for="item in list" :key="item.id">
                <div class="img-wrap">
                  <img :src="item.blurPicUrl" class="auto-img">
                  <router-link to="/" class="img-cover"></router-link>
                  <a class="play-music" title="播放" @click="addMusicList(item.id)"></a>
                </div>
                <p class="title">
                  <router-link to="/" class="title-text">{{item.name}}</router-link>
                </p>
                <p class="singer">
                  <span v-for="(artist, index) in item.artists" :key="artist.id">
                    <router-link to="/">{{artist.name}}</router-link>
                    <span v-if="index < item.artists.length - 1">/</span>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="l-btn" @click="prevPage"></div>
        <div class="r-btn" @click="nextPage"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "../../../components/TabBar";

export default {
  name: "NewShelf",
  props: {
    newShelfList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      title: "新碟上架",
      path: "/discover/album",
      index: 1
    };
  },
  components: {
    TabBar
  },
  methods: {
    nextPage() {
      this.index += 1;
      let ulWrap = this.$refs.ulWrap;

      let self = this;

      let callBack = function() {
        if (self.index > 2) {
          this.style.transition = "none";
          self.index = 1;
          this.style.transform = `translateX(-${self.index * 645}px)`;
        }

        ulWrap.removeEventListener("transitionend", callBack);
      };

      ulWrap.addEventListener("transitionend", callBack);

      ulWrap.style.transition = "all 1s linear";
      ulWrap.style.transform = `translateX(-${this.index * 645}px)`;
    },
    prevPage() {
      this.index -= 1;
      let ulWrap = this.$refs.ulWrap;

      let self = this;

      let callBack = function() {
        if (self.index === 0) {
          this.style.transition = "none";
          self.index = 2;
          this.style.transform = `translateX(-${self.index * 645}px)`;
        }
        ulWrap.removeEventListener("transitionend", callBack);
      };

      ulWrap.addEventListener("transitionend", callBack);

      ulWrap.style.transition = "all 1s linear";
      ulWrap.style.transform = `translateX(-${this.index * 645}px)`;
    },
    addMusicList(id) {
      this.axios.get("/api/album?id=" + id).then(response => {
        let list = response.data.songs;

        this.$store.commit("addMusicList", list);

        this.$store.commit("changeIndex", 0);

        let musicAudio = this.$store.state.audio;

        musicAudio.pause();

        musicAudio.src = null;

        this.checkMusic(musicAudio);
      });
    },
    checkMusic(musicAudio) {
      let musicIndex = this.$store.state.musicListIndex;

      let musicId = this.$store.state.musicList[musicIndex].id;

      this.axios.get("/api/check/music?id=" + musicId)
      .then(() => {
        this.axios.get("/api/song/url?id=" + musicId)
        .then(response => {
          let musicUrl = response.data.data[0].url;

          musicAudio.src = musicUrl;

          musicAudio.play();

          this.$store.commit("changePlaying", true);

        });
      })
      .catch(() => {
        this.$store.commit("remodeMusic", musicId);
        if (this.$store.state.musicList.length) {
          this.checkMusic();
        }
      });
    }
  }
};
</script>

<style scoped>
.new-shelf {
  position: relative;
}

.a {
  transition: all 1s linear;
  transform: translateX(-645px);
}

.banner {
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
}

.banner-wrap {
  height: 184px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #fff;
}

.l-btn,
.r-btn {
  position: absolute;
  top: 71px;
  width: 17px;
  height: 17px;
  background: url("../../../../public/img/index.png") no-repeat;
}

.l-btn:hover,
.r-btn:hover {
  cursor: pointer;
}

.l-btn {
  left: 4px;
  background-position: -260px -75px;
}

.r-btn {
  right: 6px;
  background-position: -300px -75px;
}

.cover-wrap {
  float: left;
  width: 645px;
  height: 180px;
  overflow: hidden;
  position: relative;
}

.list {
  float: left;
  width: 645px;
  margin-top: 28px;
}

.item {
  float: left;
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background-position: -260px 100px;
}

.img-wrap {
  margin-bottom: 7px;
  width: 100px;
  height: 100px;
  position: relative;
  display: block;
}

.img-cover {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 118px;
  height: 100px;
  background: url("../../../../public/img/coverall.png") no-repeat;
  background-position: 0 -570px;
}

.play-music {
  display: none;
  position: absolute;
  right: 10px;
  bottom: 5px;
  left: 72px;
  width: 22px;
  height: 22px;
  background: url("../../../../public/img/iconall.png") no-repeat;
  background-position: 0 -85px;
  cursor: pointer;
}

.img-wrap:hover .play-music {
  display: block;
}

.title {
  width: 90%;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.title-text {
  font-size: 12px;
  color: #000;
}

.title-text:hover {
  text-decoration: underline;
}

.singer {
  font-size: 12px;
  color: #666;
  width: 90%;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.singer a:hover {
  text-decoration: underline;
}

.ul-wrap {
  width: 400%;
  height: 100%;
  transform: translateX(-645px);
}
</style>
