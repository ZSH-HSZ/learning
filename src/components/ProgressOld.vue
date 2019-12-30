<template>
  <div class="progress">
    <div class="percent" :style="`width: ${percent*311}px;background: ${background}`" ></div>
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
      }
    },
  }
</script>

<style lang="less" scoped>
  .progress {
    width: 311px;
    height: 13px;
    position: relative;
    border-radius: 7px;
    background: rgba(34,38,43,.2);
    .percent {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 7px;
      background: #ff7d0d;
      height: 13px;
    }
  }
</style>