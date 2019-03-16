<template>
  <div>
    <div class="page-control">
      <a
        class="prev-page"
        :class="{'prev-page-active': pageNum > 1}"
        @click="prevPage"
      >上一页</a>
      <a
        :class="{
          'active': index === pagerIndex,
          'num': item !== '...',
          'more': item === '...'
        }"
        v-for="(item, index) in numList"
        :key="index"
        @click="changePage(item)"
      >{{item}}</a>
      <a class="next-page" :class="{'next-page-active': pageNum === maxNum}" @click="nextPage">下一页</a>

    </div>

  </div>
</template>

<script>
export default {
  name: "PlayListPager",
  data() {
    return {
      numList: [1, 2, 3, 4, 5, 6, 7, 8, '...'],
      maxNum: null
    }
  },
  created() {
    this.axios.get('/api/top/playlist?limit=35&order=hot')
    .then(response => {
      let total = response.data.total;
      let maxNum = Math.ceil(total / 35);
      this.maxNum = maxNum;
      this.numList.push(maxNum);
    })

  },
  computed: {
    pagerIndex() {
      return this.$store.state.pagerIndex;
    },
    pageNum() {
      return this.$store.state.pageNum;
    }
  },
  methods: {
    changePage(item) {

      if (item === '...') {
        return;
      }

      if (this.numList.length === 10) {

        if (item <= 5) {
          let list = [1, 2, 3, 4, 5, 6, 7, 8, '...', this.maxNum];
          this.numList = list;
        }

        if (item >= 6 && item <= this.maxNum - 5) {
          this.numList.splice(10, 1, this.maxNum);
          this.numList.splice(9, 1, '...');
          this.numList.splice(8, 1, item + 3);
          this.numList.splice(7, 1, item + 2);
          this.numList.splice(6, 1, item + 1);
          this.numList.splice(5, 1, item);
          this.numList.splice(4, 1, item - 1);
          this.numList.splice(3, 1, item - 2);
          this.numList.splice(2, 1, item - 3);
          this.numList.splice(1, 1, '...');
          this.numList.splice(0, 1, 1);
        }

        if (item === this.maxNum) {
          let list = [
            1,
            '...',
            this.maxNum - 7,
            this.maxNum - 6,
            this.maxNum - 5,
            this.maxNum - 4,
            this.maxNum - 3,
            this.maxNum - 2,
            this.maxNum - 1,
            this.maxNum
          ];
          this.numList = list;
        }

      }

      if (this.numList.length === 11) {

        if (item <= this.maxNum - 5 && item > 5) {
          this.numList.splice(10, 1, this.maxNum);
          this.numList.splice(9, 1, '...');
          this.numList.splice(8, 1, item + 3);
          this.numList.splice(7, 1, item + 2);
          this.numList.splice(6, 1, item + 1);
          this.numList.splice(5, 1, item);
          this.numList.splice(4, 1, item - 1);
          this.numList.splice(3, 1, item - 2);
          this.numList.splice(2, 1, item - 3);
          this.numList.splice(1, 1, '...');
          this.numList.splice(0, 1, 1);

        }

        if (item > this.maxNum - 5) {
          let list = [
            1,
            '...',
            this.maxNum - 7,
            this.maxNum - 6,
            this.maxNum - 5,
            this.maxNum - 4,
            this.maxNum - 3,
            this.maxNum - 2,
            this.maxNum - 1,
            this.maxNum
          ];
          this.numList = list;
        }

        if (item < 6 && item > 0) {
          let list = [1, 2, 3, 4, 5, 6, 7, 8, '...', this.maxNum];
          this.numList = list;
        }

      }

      this.numList.map((e, i) => {
        if (item === e) {
          this.$store.commit('changePagerIndex', i);
        }
      })

      this.$store.commit('changepageNum', item);

      let typeName = this.$store.state.typeName;
      let page = item - 1;
      let startNum = page * 35;

      this.axios.get(`/api/top/playlist/?order=hot&cat=${typeName}&limit=35&offset=${startNum}`)
      .then(response => {
        let data = response.data.playlists;
        this.$store.commit('changePlayListData', data);
      })

      scrollTo(0, 0);

    },

    nextPage() {

      let item = this.$store.state.pageNum;

      if (item <= this.maxNum) {
        if (item === this.maxNum) {
          return;
        }
        item += 1;
        this.changePage(item);
      }

    },

    prevPage() {
      let item = this.$store.state.pageNum;

      if (item > 1) {
        if (item === 1) {
          return;
        }
        item -= 1;
        this.changePage(item);
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

  .prev-page-active {
    background-position: 0 -560px;
    color: #333;
    cursor: default;
    cursor: pointer;
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

  .next-page-active {
    background-position: -75px -620px;
    color: #cacaca;
    cursor: default;
  }
</style>
