<template>
  <div class="top-list">
    <div class="center-wrap">

      <div class="wrap-left">
        <SortList></SortList>
      </div>

      <div v-if="createShow" class="wrap-right"></div>
      <div v-else class="wrap-right">
        <TopListHeader></TopListHeader>
        <MusicList></MusicList>
        <Review></Review>
      </div>

    </div>
  </div>
</template>

<script>
import SortList from './components/SortList'
import TopListHeader from './components/TopListHeader'
import MusicList from './components/MusicList'
import Review from './components/Review'

export default {
  name: 'Toplist',
  components: {
    SortList,
    TopListHeader,
    MusicList,
    Review
  },
  data() {
    return {
      createShow: true
    }
  },
  created() {
    this.axios.get('/api/playlist/detail?id=19723756')
    .then(response => {
      let data = response.data;
      let obj = {};
      let text = "每天更新";
      obj.data = data;
      obj.text = text;
      this.$store.commit('changeTopListData', obj);
      let ready = this.$store.state.topListData;
      if (ready) {
        this.createShow = false;
      }
    })

    this.axios.get('/api/comment/playlist?id=19723756')
    .then(response => {
      let data = response.data;
      this.$store.commit('changeReview', data);
    })
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
</style>
