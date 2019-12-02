<template>
  <div id="app" class=" align jus">
    <router-view></router-view>
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    background-image: url('./static/images/index_bg.png');
    background-size: cover;
  }
</style>