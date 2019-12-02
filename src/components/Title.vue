<template>
  <div class="components-title">
    {{title}}
    <img src="../static/images/10.png" alt="" @click="close()">
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    methods: {
      close() {
        this.$router.push({query: {}})
        this.$emit('dialogClose')
      }
    },
  }
</script>

<style lang="less" scoped>
  .components-title {
    font-size: 25px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    width: 190px;
    text-align: center;
    padding: 0 40px;
    margin: 0 auto;
    position: relative;
    img {
      position: absolute;
      right: -270px;
      top: -6px;
    }
  }
</style>