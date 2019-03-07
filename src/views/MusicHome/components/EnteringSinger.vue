<template>
  <div class="singer">
    <h3 class="title">
      <span>入驻歌手</span>
      <router-link to="/" class="more">查看全部&gt;</router-link>
    </h3>

    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <router-link to="/" class="item">
          <div class="img-wrap">
            <img :src="item.img1v1Url" class="auto-img">
          </div>
          <div class="info">
            <h4>
              <span class="name">{{item.name}}</span>
            </h4>
            <p class="info-text">{{item.alias ? item.alias[0] : ''}}</p>
          </div>
        </router-link>
      </li>
    </ul>

    <div>
      <router-link to="/" class="btn">
        <i>申请成为网易音乐人</i>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EnteringSinger',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.axios.get('/api/artist/list?cat=5001&limit=5')
    .then(response => {
      let data = response.data;
      this.list = data.artists;
    })
  }
}
</script>


<style scoped>
  .singer {
    position: relative;
    margin-top: 15px;
    font-size: 12px;
  }

  .title {
    position: relative;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    overflow: hidden;
  }

  .title span {
    float: left;
    font-weight: 700;
  }

  .more {
    float: right;
    font-weight: normal;
    color: #666;
  }

  .more:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .list {
    margin: 6px 0 14px 20px;
    position: relative;
  }

  .list li {
    margin-top: 14px;
    overflow: hidden;
  }

  .item {
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
  }

  .item:hover {
    cursor: pointer;
    background: #f4f4f4;
  }

  .img-wrap {
    float: left;
    width: 62px;
    height: 62px;
  }

  .info {
    float: left;
    width: 148px;
    height: 62px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
  }

  .info h4 {
    margin-top: 8px;
  }

  .name {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 90%;
    font-weight: 700;
  }

  .info-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #666;
    width: 90%;
    margin-top: 15px;
  }

  .btn {
    background: url('../../../../public/img/button2.png') no-repeat;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    display: inline-block;
    padding: 0 5px 0 0;
    color: #333;
    background-position: right -100px;
    margin-left: 20px;
    border-radius: 4px;
  }

  .btn i {
    background: url('../../../../public/img/button2.png') no-repeat;
    vertical-align: top;
    text-align: center;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    display: inline-block;
    padding: 0 15px 0 20px;
    pointer-events: none;
    color: #333;
    background-position: 0 -59px;
    width: 205px;
    font-weight: bold;
    font-style: normal;
  }
</style>
