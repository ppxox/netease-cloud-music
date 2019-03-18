<template>
  <div>

    <div class="head">
      <h3>
        <span>{{typeName}}</span>
        <span class="type-btn" @click="showStatus">选择分类</span>
      </h3>
      <div
        class="right-wrap"
        :style="cutover ? 'background-position: 0 0;' : 'background-position: 0 -32px;'"
      >

        <router-link
          :to="{
            path: '/discover/playlist',
            query: {
              order: 'hot',
              cat: $store.state.typeName
            }
          }"
          class="hot"
          :style="cutover ? 'color: #fff;' : 'color: #333;'"
          @click.native="cutoverTrue"
        >
          热门
        </router-link>

        <router-link
          :to="{
            path: '/discover/playlist',
            query: {
              order: 'new',
              cat: $store.state.typeName
            }
          }"
          class="new"
          :style="cutover ? 'color: #333;' : 'color: #fff;'"
          @click.native="cutoverFalse"
        >
          最新
        </router-link>

      </div>
    </div>

    <div class="show" v-show="show">
      <div class="show-head">
        <span class="head-icon"></span>
      </div>
      <div class="show-body">

        <h3><router-link to="/discover/playlist" tag="span" @click.native="defaultType">全部风格</router-link></h3>

        <div class="row" v-for="(item, index) in language" :key="index">
          <div class="col-1">
            <span
              :class="{
                'icon-1': index == 0,
                'icon-2': index == 1,
                'icon-3': index == 2,
                'icon-4': index == 3,
                'icon-5': index == 4
                }"
            ></span><span class="col-1-name">{{item}}</span>
          </div>
          <div class="col-2">
            <div class="item-list">

              <span class="item-wrap" v-for="(ele, i) in languageList[index]" :key="i">
                <router-link
                  :to="{path: '/discover/playlist', query: {cat: ele.name, order: cutover ? 'hot' : 'new', limit: 35}}"
                  class="item"
                  @click.native="changeName(ele.name)"
                >{{ele.name}}</router-link>
                <span class="line">|</span>
              </span>

            </div>
          </div>
        </div>

      </div>
      <div class="show-bottom"></div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'PlayListHead',
  data() {
    return {
      language: [],
      languageList: [],
      show: false,
      cutover: true
    }
  },
  created() {
    this.axios.get('/api/playlist/catlist')
    .then(response => {
      this.language = response.data.categories;
      let list = response.data.sub;

      for (let i = 0; i <= 4; i++) {
        let oneLanguage = list.filter(e => {
          if (e.category === i) {
            return e
          }
        })

        this.languageList.push(oneLanguage);
      }

    })
  },
  computed: {
    typeName() {
      return this.$store.state.typeName;
    }
  },
  methods: {
    showStatus() {
      this.show = !this.show
    },
    changeName(name) {
      this.$store.commit('changeTypeName', name);
      this.show = false;

      this.axios.get('/api/top/playlist/?cat=' + name + '&limit=35&order=hot')
      .then(response => {
        let data = response.data.playlists;
        let total = response.data.total;
        this.$store.commit('changeTotalMusicList', total);
        this.$store.commit('changePlayListData', data);
      })
    },
    defaultType() {
      let name = '全部';
      this.$store.commit('changeTypeName', name);
      this.show = false;

      this.axios.get('/api/top/playlist/?cat=' + name + '&limit=35&order=hot')
      .then(response => {
        let data = response.data.playlists;
        let total = response.data.total;
        this.$store.commit('changeTotalMusicList', total);
        this.$store.commit('changePlayListData', data);
      })
    },
    cutoverTrue() {
      this.cutover = true;

      let name = this.$store.state.typeName;

      this.axios.get('/api/top/playlist/?cat=' + name + '&limit=35&order=hot&offset=0')
      .then(response => {
        let data = response.data.playlists;
        let total = response.data.total;
        let maxNum = Math.ceil(total / 35);
        this.$store.commit('changePageList', maxNum);
        this.$store.commit('changePagerIndex', 0);
        this.$store.commit('changepageNum', 1);
        this.$store.commit('changePlayListData', data);
      })

    },
    cutoverFalse() {
      this.cutover = false;

      let name = this.$store.state.typeName;

      this.axios.get('/api/top/playlist/?cat=' + name + '&limit=35&order=new&offset=0')
      .then(response => {
        let data = response.data.playlists;
        let total = response.data.total;
        let maxNum = Math.ceil(total / 35);
        this.$store.commit('changePageList', maxNum);
        this.$store.commit('changePagerIndex', 0);
        this.$store.commit('changepageNum', 1);
        this.$store.commit('changePlayListData', data);
      })

    }
  }
}
</script>

<style scoped>
  .head {
    height: 40px;
    position: relative;
    border-bottom: 2px solid #c20c0c;
  }

  .head h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }

  .type-btn {
    font-size: 12px;
    width: 86px;
    height: 31px;
    text-align: center;
    border: 1px solid #c4c4c4;
    display: inline-block;
    line-height: 31px;
    border-radius: 5px;
    margin-left: 10px;
    position: absolute;
    top: 0;
    background: #f9f9f9;
    color: #0c73c2;
  }

  .type-btn:hover {
    background: #fff;
    cursor: pointer;
  }

  .right-wrap {
    background: url('../../../../public/img/button.png') no-repeat;
    float: right;
    width: 93px;
    height: 29px;
    background-position: 0 0;
  }

  .hot {
    font-size: 12px;
    float: left;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    color: #fff;
  }

  .new {
    font-size: 12px;
    color: #333;
    float: left;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
  }

  .hot:hover,
  .new:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .show {
    position: absolute;
    top: 75px;
    z-index: 5;
    width: 720px;
    display: block;
    left: 0;
    font-size: 12px;
  }

  .show-head {
    height: 32px;
    background: url('../../../../public/img/sltlyr.png') no-repeat;
  }

  .head-icon {
    background: url('../../../../public/img/iconall.png') no-repeat;
    position: absolute;
    top: 2px;
    left: 132px;
    display: inline-block;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
    vertical-align: middle;
  }

  .show-body {
    background: url('../../../../public/img/sltlyr.png') repeat-y;
    padding: 0 10px;
    background-position: -720px 0;
  }

  .show-body h3 {
    height: 37px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;
    color: #333;
  }

  .show-body h3 span {
    width: 75px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    display: inline-block;
    background: url('../../../../public/img/button.png') no-repeat;
    background-position: 0 -64px;
  }

  .show-body h3 span:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .row {
    display: flex;
    position: relative;
  }

  .col-1 {
    flex: 0 0 71px;
    margin-left: 26px;
    border-right: 1px solid #e6e6e6;
  }

  .col-2 {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .icon-1,
  .icon-2,
  .icon-3,
  .icon-4,
  .icon-5 {
    background: url('../../../../public/img/icon.png') no-repeat;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    width: 23px;
    height: 23px;
    margin-right: 8px;
    margin-bottom: 4px;
    margin-top: 10px;
  }

  .icon-1 {
    background-position: -20px -735px;
  }

  .icon-2 {
    background-position: 0 -60px;
  }

  .icon-3 {
    background-position: 0 -88px;
  }

  .icon-4 {
    background-position: 0 -117px;
  }

  .icon-5 {
    background-position: 0 -141px;
  }

  .col-1-name {
    display: inline-block;
    position: relative;
    font-weight: 600;
    bottom: -4px;
  }

  .item-list {
    padding: 10px 15px 0 25px;
  }

  .line {
    margin: 0 8px 0 10px;
    color: #d8d8d8;
  }

  .item-wrap {
    display: inline-block;
    word-break: break-word;
    word-wrap: break-word;
    line-height: 24px;
  }

  .item:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .show-bottom {
    background: url('../../../../public/img/sltlyr.png') no-repeat;
    height: 20px;
    background-position: -1440px -12px;
  }
</style>
