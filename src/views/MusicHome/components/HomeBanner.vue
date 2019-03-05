<template>
  <div class="home-banner">
    <div class="wrap" @mouseenter="enterBanner" @mouseleave="leaveBanner">
      <div>
        <transition-group name="fade">
          <div
            class="img-wrap"
            v-for="(item, index) in list"
            :key="item.imageUrl"
            v-show="changeIndex === index"
          >
            <img :src="item.imageUrl" class="auto-img">
          </div>
        </transition-group>

        <div class="l-btn" @click="lessIndex"></div>
        <div class="r-btn" @click="addIndex"></div>

        <div class="control">
          <div
            class="control-item"
            v-for="(i, index) in list.length"
            :key="index"
            :class="{'control-item-active': changeIndex === index}"
            @click="controlIndex(index)"
          ></div>
        </div>
      </div>

      <div class="download-wrap">
        <router-link to="/download" class="download-btn"></router-link>
        <p class="text">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span class="shadowl"></span>
        <span class="shadowr"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props: ["list"],
  data() {
    return {
      changeIndex: 0,
      timer: null
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.addIndex();
    }, 2000);
  },
  methods: {
    lessIndex() {
      this.changeIndex -= 1;
      if (this.changeIndex < 0) {
        this.changeIndex = this.list.length - 1;
      }
    },
    addIndex() {
      this.changeIndex += 1;
      if (this.changeIndex > this.list.length - 1) {
        this.changeIndex = 0;
      }
    },
    controlIndex(i) {
      this.changeIndex = i;
    },
    enterBanner() {
      clearInterval(this.timer);
      this.timer = null;
    },
    leaveBanner() {
      this.timer = setInterval(() => {
        this.addIndex();
      }, 2000);
    }
  }
};
</script>

<style scoped>
.home-banner {
  background-image: url("../../../../public/img/banner-bg.jpg");
  background-repeat: repeat-x;
}

.wrap {
  position: relative;
  width: 982px;
  height: 336px;
  margin: 0 auto;
}

.img-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 730px;
  height: 336px;
}

.l-btn,
.r-btn {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  background: url("../../../../public/img/banner.png") no-repeat;
}

.l-btn {
  left: -68px;
  background-position: 0 -360px;
}

.r-btn {
  right: -68px;
  background-position: 0 -508px;
}

.l-btn:hover {
  cursor: pointer;
  background-position: 0 -430px;
}

.r-btn:hover {
  background-position: 0 -578px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

/* 控制器 */
.control {
  position: absolute;
  top: 310px;
  left: 0;
  width: 730px;
  height: 20px;
  text-align: center;
}

.control-item {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../../../../public/img/banner.png") no-repeat;
  background-position: 3px -343px;
}

.control-item:hover {
  background-position: -16px -343px;
  cursor: pointer;
}

.control-item-active {
  background-position: -16px -343px;
}

/* 下载客户端图片 */
.download-wrap {
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 336px;
  background: url('../../../../public/img/download.png') no-repeat;
}

.download-btn {
  display: block;
  width: 215px;
  height: 56px;
  margin: 212px 0 0 19px;
}

.download-btn:hover {
  background: url('../../../../public/img/download.png') no-repeat;
  background-position: 0 -340px;
}

.text {
  margin: 10px auto;
  text-align: center;
  color: #8d8d8d;
  font-size: 12px;
}

.shadowl,
.shadowr {
  display: block;
  position: absolute;
  top: 0;
  width: 20px;
  height: 336px;
  background: url('../../../../public/img/banner.png') no-repeat;
}

.shadowl {
  left: -20px;
  background-position: -1px 0;
}

.shadowr {
  left: auto;
  right: -20px;
  background-position: -20px 0;
}
</style>
