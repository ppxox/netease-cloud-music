<template>
  <div class="bottom-bar">
    <div class="wrap">
      <audio controls class="audio"></audio>
    </div>
  </div>
</template>

<style scoped>
  .bottom-bar {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
  }

  .wrap {
    width: 980px;
    margin: 0 auto;
    height: 50px;
    transition: all 2 linear;
    transform: translateY(100%);
  }

  .bottom-bar:hover .wrap {
    transform: translateY(0);
  }

  .audio {
    width: 980px;
    height: 100%;
  }
</style>
