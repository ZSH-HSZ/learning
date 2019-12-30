<template>
  <div id="app" class="align jus">
    <router-view></router-view>
    <div class="img-bg"></div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    mounted() {
    },
    data() {
      return {
      }
    },
  }
</script>
<style lang="less">
  #app {
    font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: relative;
    color: #fff;
    .img-bg {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('./static/images/index_bg.png');
      background-size: cover;
    }
  }
</style>