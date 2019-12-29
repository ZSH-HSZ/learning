<template>
  <div class="app-body-center">
    <div class="welcome">你好，一二三</div>
    <div class="integral align jus">
      <div class="progress-circle">
        <svg :width="180" :height="180" :viewBox="`0 0 ${180} ${180}`" class="svg">
          <circle :cx="90" :cy="90" :r="75" fill="none" stroke="#fff" stroke-width="10" />
        </svg>
        <div class="circel-progress align jus direction">
          <div class="integral-header">当前积分</div>
          <div class="integral-number">2930</div>
        </div>
      </div>
      <div class="can-get">
        <div class="item-get">
          <div class="item-get-title">提问</div>
          <div class="item-get-number">18</div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .app-body-center {
    margin: 0 50px;
    height: 530px;
    width: 600px;
    .welcome {
      text-align: center;
      font-size: 28px;
    }
    .integral {
      width: 400px;
      height: 400px;
      margin: 0 auto;
      position: relative;
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
        padding-bottom: 20px;
        .integral-header {
          font-size: 18px;
        }
        .integral-number {
          margin-top: 10px;
          font-size: 48px;
          font-weight: bold;
        }
      }
      .can-get {
        .item-get {
          position: absolute;
          left: 20px;
          top: 20px;
          text-align: center;
          width: 60px;
          animation: getmove 2s linear infinite;
          .item-get-ttile {
            font-size: 12px;
          }
          .item-get-number {
            font-size: 18px;
            width: 60px;
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 100%;
            margin: 10px auto 0;
            background: linear-gradient(-135deg, #333f50, #eee);
          }
        }
      }
    }
  }
  @keyframes getmove {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(10px, 10px);
    }
    40% {
      transform: translate(30px, 24px);
    }
    60% {
      transform: translate(-10px, 35px);
    }
    80% {
      transform: translate(20px, 5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>