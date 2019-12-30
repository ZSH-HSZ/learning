<template>
  <div class="app-body-center">
    <div class="welcome">{{$_.get(userInfo, 'info.welcome')}}</div>
    <div class="integral align jus">
      <div class="progress-circle">
        <div class="circle-detail"></div>
        <div class="circel-progress align jus direction">
          <div class="integral-header">总积分</div>
          <div class="integral-number">{{$_.get(userInfo, 'coin.total')}}</div>
        </div>
      </div>
      <div class="can-get">
        <div class="item-get" v-for="(item, index) in $_.get(userInfo, 'coin.detail')" :key="index" :style="`animation: getmove${index%2} ${index+30}s linear infinite ${direction[index%4]};top: ${(index/2)*30+20}px; ${index%2===0?'left':'right'}: 20px`">
          <div class="item-get-title">{{item.title}}</div>
          <div class="item-get-number">{{item.value}}</div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      userInfo: {
        type: Object,
      },
    },
    data() {
      return {
        position: {
          'left': 20,
          'top': 20
        },
        direction: ['normal', 'reverse', 'alternate', 'alternate-reverse']
      }
    },
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
      .circle-detail {
        width: 170px;
        height: 170px;
        background-color: transparent;
        border: 8px solid #fff;
        border-radius: 100%;
        box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
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
          text-align: center;
          width: 60px;
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
  
</style>
<style lang="less">
  @keyframes getmove0 {
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
  @keyframes getmove1 {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(-10px, 10px);
    }
    40% {
      transform: translate(-30px, 24px);
    }
    60% {
      transform: translate(-10px, -35px);
    }
    80% {
      transform: translate(-20px, 5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>