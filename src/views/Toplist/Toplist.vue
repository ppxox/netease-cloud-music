<template>
  <div class="top-list">
    <div class="center-wrap">
      <div class="wrap-left">
        <div class="sort-wrap">
          <h2 class="sort-title">云音乐特色榜</h2>
          <ul class="list">
            <li v-for="(item, i) in particularList"
                :class="{active: i === fIndex}"
                :key="item.id"
                @click="changeFristClass(i)">
              <div class="item">
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
                @click="changeSecondClass(i)">
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
      </div>
      <div class="wrap-right"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Toplist',
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
      let list = response.data.list.slice(0, 4);
      this.particularList = list;
    })

    this.axios.get('/api/toplist')
    .then(response => {
      let list = response.data.list.slice(4);
      this.worldList = list;
    })
  },
  methods: {
    changeFristClass(i) {
      this.sIndex = null;
      this.fIndex = i;
    },
    changeSecondClass(i) {
      this.sIndex = i;
      this.fIndex = null;
    }
  }
}
</script>

<style scoped>
  .top-list {
    position: relative;
    background: #f5f5f5;
  }

  .center-wrap {
    display: flex;
    background: url('../../../public/img/wrap3.png') repeat-y;
    min-height: 700px;
    width: 980px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }

  .wrap-left {
    flex: 1;
  }

  .wrap-right {
    flex: 0 0 740px;
  }

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
