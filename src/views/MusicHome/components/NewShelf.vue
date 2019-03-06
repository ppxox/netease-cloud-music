<template>
  <div class="new-shelf">
    <TabBar :title="title" :path="path"></TabBar>
    <div class="banner"></div>
  </div>
</template>

<script>
import TabBar from '../../../components/TabBar'

export default {
  name: "NewShelf",
  data() {
    return {
      title: '新碟上架',
      path: '/discover/album'
    }
  },
  components: {
    TabBar
  }
}
</script>

<style scoped>
.new-shelf {
  position: relative;
}

.banner {
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
}
</style>
