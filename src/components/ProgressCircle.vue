<template>
  <div class="progress-circle">
    <svg :width="width" :height="width" :viewBox="`0 0 ${width} ${width}`" class="svg">
      <circle :cx="cx" :cy="cx" :r="r" fill="none" stroke="transparent" stroke-width="3" />
      <circle :cx="cx" :cy="cx" :r="r" fill="none" stroke="#fff" stroke-width="3" :stroke-dasharray="allProgress" :stroke-dashoffset="allProgress*(1-progressValue/100)"></circle>
    </svg>
    <div class="circel-progress">{{progressValue}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      progressValue: {
        type: [Number, String],
      },
    },
    data() {
      return {
        width: 50,
        r: 20,
        cx: 25,
        allProgress: 2*3.1415926*20
      }
    },
  }
</script>

<style lang="less" scoped>
  .progress-circle {
    position: relative;
    .svg {
      transform: rotate(-90deg);
    }
    .circel-progress {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      transform: translateY(-50%);
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>