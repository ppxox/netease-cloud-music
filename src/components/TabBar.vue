<template>
  <div class="head">
    <router-link :to="path" class="title">{{title}}</router-link>
    <div class="tab">
      <span v-for="(item, index) in tabList" :key="index">
        <router-link :to="item.path" class="tab-title">{{item.name}}</router-link>
        <span class="line" v-show="!(index === tabList.length - 1)">|</span>
      </span>
    </div>
    <span class="more">
      <router-link :to="path" class="more-text">更多</router-link>
      <i class="more-icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: ''
    },
    tabList: {
      type: Array,
      default() {
        return []
      }
    },
    path: {
      type: String,
      default: ''
    }
  }
};
</script>


<style scoped>
.head {
  height: 33px;
  padding: 0 10px 0 34px;
  background: url("../../public/img/index.png") no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
}

.title {
  float: left;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
}

.tab {
  float: left;
  margin: 4px 0 0 20px;
}

.tab-title {
  font-size: 12px;
  color: #666;
}

.line {
  font-size: 12px;
  margin: 0 10px;
  color: #ccc;
}

.more {
  float: right;
  margin-top: 4px;
}

.more-text {
  font-size: 12px;
  color: #666;
}

.more-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  vertical-align: middle;
  background: url("../../public/img/index.png") no-repeat;
  background-position: 0 -240px;
}

.more-text:hover,
.tab-title:hover {
  text-decoration: underline;
}
</style>
