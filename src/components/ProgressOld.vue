<template>
  <div class="progress">
    <div class="percent" :style="`width: ${percent*311}px;background: ${background}`" >
      {{label}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      percent: {
        type: Number,
      },
      background: {
        type: String,
        default: '#ff7d0d'
      },
      label: String
    },
  }
</script>

<style lang="less" scoped>
  .progress {
    width: 311px;
    height: 16px;
    position: relative;
    border-radius: 7px;
    background: rgba(34,38,43,.2);
    .percent {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 7px;
      background: #ff7d0d;
      height: 16px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 16px;
    }
  }
</style>