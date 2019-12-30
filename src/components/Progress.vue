<template>
  <div class="progress">
    <div class="percent" :style="`width: ${info.done_rate*210}px;`">
      {{info.label}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: Object
    },
  }
</script>

<style lang="less" scoped>
  .progress {
    width: 210px;
    height: 20px;
    position: relative;
    border-radius: 10px;
    background: #333f50;
    border: 1px solid #fff;
    .percent {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 10px;
      background: #fff;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #333f50;
    }
  }
</style>