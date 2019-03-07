<template>
  <div class="bottom-bar">
    <div class="big-wrap">
      <div class="wrap">
        <div class="icon-box">
          <i class="iconfont icon-shangyishou icon"></i>
        </div>
        <div class="icon-box">
          <i class="iconfont icon-bofang icon"></i>
        </div>
        <div class="icon-box">
          <i class="iconfont icon-xiayishou icon"></i>
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
      index: 0
    }
  },
  mounted() {
    this.$store.commit('getAudio', this.$refs.audio)
  }
}
</script>


<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
}

.big-wrap {
  background: #333;
  height: 100%;
  transition: all 0.2s linear;
  transform: translateY(80%);
}

.wrap {
  width: 980px;
  height: 100%;
  margin: 0 auto;
}

.bottom-bar:hover .big-wrap {
  transition: all 0.2s linear;
  transform: translateY(0);
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
</style>
