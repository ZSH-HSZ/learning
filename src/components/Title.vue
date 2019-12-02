<template>
  <div class="components-title">
    {{title}}
  </div>
</template>

<script>
  export default {
    props: {
      title: String
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
  }
</style>