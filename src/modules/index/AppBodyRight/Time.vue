<template>
    <div class="shadow-box now-time align jus direction">
      <div class="time align jus">{{time.substring(0, 2)}}<Icon type="icon50" class="maohao"></Icon>{{time.substring(2, 4)}}</div>
      <div class="yy">{{yy}}</div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        time: '',
        yy: ''
      }
    },
    mounted () {
      this.formatHH();
      this.formatYY();
      setInterval(() => {
        this.formatHH()
        this.formatYY()
      }, 1000);
    },
    methods: {
      formatHH() {
        this.time = this.$moment().format('HHmm')
      },
      formatYY() {
        this.yy = `${this.$moment().format('YYYY年MM月DD日')} 星期${['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]}`
      },
    },
  }
</script>

<style lang="less" scoped>
  .now-time {
      width: 300px;
      height: 80px;
      margin-top: 25px;
      text-align: center;
      .time {
        font-size: 36px;
        text-align: center;
        .maohao {
          animation: timeOpacity 1s infinite normal;
        }
      }
      .yy {
        margin-top: 5px;
        font-size: 16px;
      }
  }
  @keyframes timeOpacity {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>