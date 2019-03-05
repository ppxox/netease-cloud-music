<template>
  <div class="nav-bar">
    <div class="nav-top">
      <div class="nav-top-wrap">

        <i class="logo"></i>

      </div>
    </div>
    <div class="nav-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>


<style>
.nav-bar {
  position: relative;
  left: 0;
  top: 0;
}

.nav-top {
  position: relative;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
}

.nav-top-wrap {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}

.logo {
  float: left;
  width: 176px;
  height: 69px;
  background: url('../../public/img/topbar.png') no-repeat;
  background-position: 0 0;
}
</style>
