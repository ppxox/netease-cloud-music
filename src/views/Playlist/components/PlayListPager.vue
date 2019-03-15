<template>
  <div>
    <div class="page-control">
      <a class="prev-page">上一页</a>
      <a
        class="num"
        :class="{'active': index === pagerIndex}"
        v-for="(item, index) in numList"
        :key="index"
        @click="changePage(item, index)"
      >{{item}}</a>
      <a class="next-page">下一页</a>

    </div>

  </div>
</template>

<script>
export default {
  name: "PlayListPager",
  data() {
    return {
      oneStyle: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      twoStyle: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      threeStyle: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      numList: [1, 2, 3, 4, 5, 6, 7, 8, '...']
    }
  },
  created() {
    this.axios.get('/api/top/playlist?limit=35&order=hot')
    .then(response => {
      let total = response.data.total;
      let maxNum = Math.ceil(total / 35);
      this.numList.push(maxNum);
    })

  },
  computed: {
    pagerIndex() {
      return this.$store.state.pagerIndex;
    }
  },
  methods: {
    changePage(item, index) {
      if (item <= 5) {
        this.$store.commit('changePagerIndex', index);
      }
      if (index > 4) {
        this.numList.splice(1, 1, '...');
        this.$store.commit('changePagerIndex', item - 1);

      }
    }
  }
}
</script>

<style scoped>
  .page-control {
    margin: 20px 0;
    font-size: 12px;
    text-align: center;
  }

  .prev-page {
    background: url('../../../../public/img/button.png') no-repeat;
    background-position: 0 -620px;
    color: #cacaca;
    cursor: default;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 24px;
    line-height: 24px;
    text-align: left;
    padding-left: 22px;
    padding-right: 11px;
  }

  .num {
    height: 22px;
    line-height: 22px;
    display: inline-block;
    color: #333;
    cursor: default;
    padding: 0 8px;
    margin: 0 1px 0 2px;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
  }

  .num:hover {
    border-color: #A2161B;
  }

  .active {
    height: 22px;
    line-height: 22px;
    display: inline-block;
    background: url('../../../../public/img/button.png') no-repeat;
    background-position: 0 -650px;
    border-color: #A2161B;
    color: #fff;
    cursor: default;
    padding: 0 8px;
    margin: 0 1px 0 2px;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  .more {
    line-height: 22px;
    color: #333;
    display: inline-block;
    margin: 0 2px;
  }

  .next-page {
    background: url('../../../../public/img/button.png') no-repeat;
    background-position: -75px -560px;
    color: #333;
    cursor: default;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 24px;
    line-height: 24px;
    text-align: left;
    padding-left: 11px;
    padding-right: 22px;
    cursor: pointer;
  }
</style>
