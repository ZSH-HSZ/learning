<template>
  <div class="question dialog-component">
    <CTitle title="咨询答疑"></CTitle>
    <div class="new-question">+ 新提问</div>
    <div class="all-question-list">
      <div class="question-item" v-for="(item, index) in questionList" :key="index">
        <div class="align between question-item-top">
          <div class="question-detail-title">{{item.msg}}</div>
          <div class="check-reward point" @click="showReply(item, index)">点击查看回复</div>
        </div>
        <div class="reply" v-if="replyShow[index]">回复：<span>{{item.reply}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.query();
    },
    data() {
      return {
        questionList: [],
        replyShow: []
      }
    },
    methods: {
      query() {
        this.$post({
          road: 'question'
        })
        .then(res=>{
          console.log(res)
          this.questionList = res.finished
          this.replyShow = res.finished.map(ele=>{
            return false
          })
        })
      },
      showReply(item, index) {
        if(item.has_reply==='yes') {
          this.$set(this.replyShow, index, !this.replyShow[index])
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .question {
    .new-question {
      margin-top: 30px;
      width: 135px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: rgba(108,168,255, 0.7);
      color: #fff;
      font-size:21px;
      font-weight:500;
      border-radius: 20px;
    }
    .all-question-list {
      margin-top: 38px;
      width: 100%;
      .question-item {
        background: #ededed;
        margin-top: 10px;
        padding: 0 20px;
        .question-item-top {
          height: 40px;
          line-height: 40px;
          .question-detail-title {
            color: #999;
          }
          .check-reward {
            color: #6498D8;
            font-size: 13px;
          }
        }
        .reply {
          line-height: 56px;
          color: #666666;
          border-top: 1px solid #ddd;
          text-align: left;
          span {
            color: #989898;
          }
        }
      }
    }
  }
</style>