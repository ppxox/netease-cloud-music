<template>
  <div class="sort-wrap">
    <h2 class="sort-title">云音乐特色榜</h2>
    <ul class="list">
      <li v-for="(item, i) in particularList"
          :class="{active: i === fIndex}"
          :key="item.id">
        <div class="item" @click="changeFristClass(i, item.id, item.updateFrequency)">
          <div class="item-img">
            <img :src="item.coverImgUrl" class="auto-img">
          </div>
          <div class="item-name">{{item.name}}</div>
          <p class="updated">{{item.updateFrequency}}</p>
        </div>
      </li>
    </ul>

    <h2 class="sort-title other">全球媒体榜</h2>
    <ul class="list">
      <li v-for="(item, i) in worldList"
          :class="{active: i === sIndex}"
          :key="item.id"
          @click="changeSecondClass(i, item.id, item.updateFrequency)">
        <div class="item">
          <div class="item-img">
            <img :src="item.coverImgUrl" class="auto-img">
          </div>
          <div class="item-name">{{item.name}}</div>
          <p class="updated">{{item.updateFrequency}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SortList',
  data() {
    return {
      particularList: [],
      worldList: [],
      fIndex: 0,
      sIndex: null
    }
  },
  created() {
    this.axios.get('/api/toplist')
    .then(response => {

      let particularList = response.data.list.slice(0, 4);
      this.particularList = particularList;

      let worldList = response.data.list.slice(4);
      this.worldList = worldList;

    })
  },
  methods: {
    changeFristClass(i, id, text) {
      this.sIndex = null;
      this.fIndex = i;

      this.axios.get('/api/playlist/detail?id=' + id)
      .then(response => {
        let data = response.data;
        let obj = {};
        obj.data = data;
        obj.text = text;
        this.$store.commit('changeTopListData', obj);
      })

      location.hash = "#top";
    },
    changeSecondClass(i, id, text) {
      this.sIndex = i;
      this.fIndex = null;

      this.axios.get('/api/playlist/detail?id=' + id)
      .then(response => {
        let data = response.data;
        let obj = {};
        obj.data = data;
        obj.text = text;
        this.$store.commit('changeTopListData', obj);
      })
      location.hash = "#top";
    }
  }
}
</script>

<style scoped>
  .sort-wrap {
    margin-top: 40px;
  }

  .sort-title {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun,\5b8b\4f53;
    font-weight: 1000;
  }

  .other {
    margin-top: 20px;
  }

  .list li {
    cursor: pointer;
    vertical-align: middle;
    height: 62px;
    padding: 10px 0 10px 20px;
  }

  .list li:hover {
    background: #f4f2f2;
  }

  .active {
    background: #e6e6e6;
  }

  .item {
    padding-left: 50px;
    overflow: hidden;
  }

  .item-img {
    float: left;
    margin-left: -50px;
    overflow: hidden;
    width: 40px;
  }

  .item-name {
    width: 150px;
    overflow: hidden;
    margin-top: 2px;
    margin-bottom: 8px;
    font-size: 12px;
  }

  .updated {
    color: #999;
    font-size: 12px;
  }
</style>
