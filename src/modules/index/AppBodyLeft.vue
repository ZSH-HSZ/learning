<template>
  <div class="app-body-left">
    <div class="shadow-box index-and-department">
      {{$_.get(userInfo, 'info.uid_label')}}
    </div>
    <div class="shadow-box basic-info align direction">
      <div v-for="(val, i) in $_.chunk($_.get(userInfo, 'score'), 3)" :key="i" class="align line-item">
        <div v-for="(item, index) in val" :key="index" class="progress-detail">
          <div class="align jus direction">
            <ProgressCircle :progressValue="item.score" v-if="item.type==='percent'"></ProgressCircle>
            <div class="star-contian" v-if="item.type==='star'" :style="`background-image: url(${item.bg})`">
              {{item.score}}
            </div>
            <div class="digital-contain" v-if="item.type==='digital'">
              {{item.score}}
            </div>
            <div class="item-label">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow-box learning">
      <div class="learning-header">学习任务</div>
      <div class="item-leadning-task" v-for="(item, index) in $_.get(taskList, 'pending', [])" :key="index">
        <div class="learning-title">{{item.title}}</div>
        <Progress :info="item" class="progress-percent"></Progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      taskList: Object,
      userInfo: Object,
    },
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
      padding: 24px;
      width: 300px;
      height: 180px;
      .line-item {
        width: 100%;
        .progress-detail {
          width: 33%;
          margin-bottom: 3px;
          .star-contian {
            width: 50px;
            height: 53px;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            font-weight: bold;
            background-size: cover;
            color:#333;
          }
          .digital-contain {
            width: 50px;
            height: 53px;
            text-align: center;
            line-height: 50px;
            position: relative;
            font-size: 16px;
            font-weight: bold;
          }
          .digital-contain::before {
            content: '';
            position: absolute;
            bottom: 8px;
            width: 40px;
            left: 5px;
            border-bottom: 5px solid #fff;
          }
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