<template>
  <div class="shadow-box goods-question-and-task">
    <div class="goods-header align">
      <span v-for="(item, index) in headerTitleList" :key="index" class="align"
        :class="`${activeIndex===index?'active-label':''}`" @click="chooseActive(item, index)">
        <div class="label point">{{item.label}}</div>
        <span class="line" v-if="index<headerTitleList.length-1">|</span>
      </span>
    </div>
    <div class="question-box">
      <div class="question-item" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">
        这是我今天的问题
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 0,
        headerTitleList: [{
            label: '答疑悬赏'
          },
          {
            label: '经典提问'
          },
        ]
      }
    },
    methods: {
      chooseActive(item, index) {
        this.activeIndex = index
      }
    },
  }
</script>

<style lang="less" scoped>
  .goods-question-and-task {
    padding: 24px;

    .goods-header {
      margin-bottom: 30px;
      .label {
        width: 90px;
        text-align: center;
        font-size: 14px;
      }

      .line {
        margin: 0 10px;
      }

      .active-label {
        .label {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }

    .question-item {
      width: 200px;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
      border: 1px solid #ccc;
      position: relative;
      margin-top: 8px;
      border-radius: 4px;
    }
  }
</style>