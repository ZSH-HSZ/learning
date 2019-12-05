<template>
  <div class="question dialog-component" v-if="visible">
    <div class="dialog-body">
      <CTitle title="咨询答疑" @dialogClose="closeDialog()"></CTitle>
      <div class="new-question point" @click="newQuestion()">+ 新提问</div>
      <div class="all-question-list">
        <div class="question-item" v-for="(item, index) in questionList" :key="index">
          <div class="question-time">提问时间：{{item.msg_time}}</div>
          <div class="align between question-item-top">
            <div class="question-detail-title">{{item.id}} {{item.msg}}</div>
            <div class="check-reward point" @click="showReply(item, index)">{{item.has_reply==='yes'?(replyShow[index]?'收起':'点击查看回复'):''}}</div>
          </div>
          <div class="reply" v-if="replyShow[index]">
            <div class="reply-time">回复时间：{{item.reply_time}}</div>
            <div >
              回复：<span>{{item.reply}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
      },
    },
    watch: {
      visible(newValue, oldValue) {
        if(newValue) {
          this.query()
        }
      }
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
          .then(res => {
            this.questionList = res.list
            if(res.list&&res.list.length) {
              this.replyShow = res.list.map(ele => {
                return false
              })
            }
          })
      },
      showReply(item, index) {
        if (item.has_reply === 'yes') {
          this.$set(this.replyShow, index, !this.replyShow[index])
        }
      },
      closeDialog() {
        this.$emit('closeDialog', 'faq')
      },
      newQuestion() {
        this.$emit('newQuestion', {old: 'faq', new: 'newQuestionDialog'})
      }
    },
  }
</script>

<style lang="less" scoped>
  .dialog-component .dialog-body {
    height: 500px;
  }
  .question {
    .new-question {
      margin-top: 30px;
      width: 135px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: rgba(0,99,177,1, 1);
      color: #fff;
      font-size: 21px;
      font-weight: 500;
      border-radius: 20px;
    }

    .all-question-list {
      margin-top: 38px;
      width: 100%;
      max-height: 300px;
      overflow-y: scroll;


      .question-item {
        background: #ededed;
        margin-top: 10px;
        padding: 0 20px;
        .question-time {
          text-align: left;
          line-height: 25px;
          color: #999;

        }
        .question-item-top {
          height: 40px;
          line-height: 40px;

          .question-detail-title {
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
          .reply-time {
            margin-top: 5px;
            line-height: 20px;
          }
          span {
          }
        }
      }
    }
  }
  .question-time,
  .reply-time {
    font-size: 12px;
  }
</style>