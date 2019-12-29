<template>
  <div class="app-body-left">
    <div class="shadow-box index-and-department">
      学号:423434****2718|机械部
    </div>
    <div class="shadow-box basic-info align direction jus">
      <div v-for="(val, i) in $_.chunk(list, 3)" :key="i" class="align around line-item">
        <div v-for="(item, index) in val" :key="index" class="align jus direction progress-detail">
          <ProgressCircle :progressValue="item.value"></ProgressCircle>
          <div class="item-label">{{item.label}}</div>
        </div>
      </div>
    </div>
    <div class="shadow-box learning">
      <div class="learning-header">学习任务</div>
      <div class="item-leadning-task" v-for="(item, index) in learningList" :key="index">
        <div class="learning-title">{{item.label}}</div>
        <Progress :info="item" class="progress-percent"></Progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            key: '',
            value: 90,
            source: '',
            label: '标准岗位分'
          },
          {
            key: '',
            value: 90,
            source: '',
            label: '标准岗位分'
          },
          {
            key: '',
            value: 90,
            source: '',
            label: '标准岗位分'
          },
          {
            key: '',
            value: 90,
            source: '',
            label: '标准岗位分'
          },
        ],
        learningList: [
          {
            label: '背诵机车操作手册',
            all: '13',
            complate: '8'
          },
          {
            label: '背诵机车操作手册',
            all: '13',
            complate: '8'
          },
          {
            label: '背诵机车操作手册',
            all: '13',
            complate: '8'
          },
        ]
      }
    },
  }
</script>

<style lang="less" scoped>
  .app-body-left {
    .index-and-department {
      width: 300px;
      height: 45px;
      font-size: 18px;
      text-align: center;
      line-height: 45px;
    }
    .basic-info {
      margin-top: 18px;
      padding: 0 24px;
      width: 300px;
      height: 180px;
      .line-item {
        width: 100%;
        .progress-detail {
          margin-bottom: 3px;
        }
        .item-label {
          font-size: 12px;
          margin-top: 3px;
        }
      }
    }
    .learning {
      margin-top: 18px;
      padding: 0 24px;
      width: 300px;
      height: 270px;
      text-align: left;
      .learning-header {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 25px;
      }
      .item-leadning-task {
        .learning-title {
          font-size: 15px;
          margin-bottom: 5px;
        }
        .progress-percent {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>