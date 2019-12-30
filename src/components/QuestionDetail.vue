<template>
  <div class="question-detail-contain align jus direction" v-if="visible">
    <div class="shadow-box" @click.stop="">
      <div class="close"></div>
      <div class="question-title">
        {{$_.get(questionDetail, 'info.info.title')}}
      </div>
      <div class="question-time">
        {{$_.get(questionDetail, 'info.info.sub')}}
      </div>
      <div class="question-detail">
        {{$_.get(questionDetail, 'info.info.detail')}}
      </div>
      <div class="goods-answer" v-if="$_.get(questionDetail, 'list', []).filter(ele=>{return ele.star>0}).length">
        <div class="goods-answer-title answer-title">
          <span>优秀答案</span>
        </div>
        <div class="goods-answer-detail"
          v-for="(item, index) in $_.get(questionDetail, 'list', []).filter(ele=>{return ele.star>0})" :key="index">
          <div class="star-number">
            <img :src="item.star_icon" alt="" v-for="(val, i) in Array.from(new Array(item.star).keys())" :key="i">
          </div>
          <div class="align">
            <div class="answer-text answer-text-left">
              {{item.msg}}
            </div>
          </div>
        </div>
      </div>
      <div class="other-answer" v-if="$_.get(questionDetail, 'list', []).filter(ele=>{return ele.star===0}).length">
        <div class="other-answer-detail answer-title">
          <span>其他答案</span>
        </div>
        <div class="other-answer-detail"
          v-for="(item, index) in $_.get(questionDetail, 'list', []).filter(ele=>{return ele.star===0})" :key="index">
          <div class="align" style="margin-top: 10px">
            <div class="answer-text answer-text-left">
              {{item.msg}}
            </div>
          </div>
        </div>
      </div>
      <div class="my-answer" v-if="$_.get(questionDetail, 'my.msg', '')">
        <div class="my-answer-title answer-title">
          <span>我的回答</span>
        </div>
        <div class="my-answer-detail">
          <div class="align" style="margin-top: 10px">
            <div class="flex-all"></div>
            <div class="answer-text">
              {{$_.get(questionDetail, 'my.msg', '')}}
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
      <img src="../static/images/close.png" class="close point" alt="" @click="closeDialog()">
      <div class="input-modal align">
        <div class="input-new-contain">
          <input type="text" class="input-new" placeholder="输入你的回答" v-model="inputValue">
        </div>
        <div class="submit point" @click="submit()">
          提交
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
      info: Object
    },
    watch: {
      visible(newValue, oldValue) {
        if (newValue === true) {
          this.query()
        }
      }
    },
    data() {
      return {
        questionDetail: {},
        inputValue: ''
      }
    },
    methods: {
      closeDialog() {
        this.$emit('update:visible', false)
        this.questionDetail = {}
        this.inputValue = ''
      },
      query() {
        this.$post({
            road: 'questionDetail',
            data: {
              vid: this.info.vid
            }
          })
          .then(res => {
            this.questionDetail = res
          })
      },
      submit() {
        this.$post({
            road: 'putMessage',
            data: {
              msg: this.inputValue,
              vid: this.info.vid
            }
          })
          .then(res => {
            if (res.code === 200) {
              this.$message.success('提交成功')
              this.query()
            }
          })
      }
    },
  }
</script>

<style lang="less" scoped>
  .question-detail-contain {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 100;

    .shadow-box {
      width: 350px;
      min-height: 600px;
      position: relative;
      background: rgba(0, 0, 0, 0.96);
      font-size: 18px;
      padding: 45px 28px 0 28px;

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
      }

      .question-title {
        font-size: 24px;
      }

      .question-time {
        text-align: center;
        margin: 18px 0;
        position: relative;
        font-size: 12px;
      }

      .question-time::before {
        position: absolute;
        content: '';
        width: 100px;
        height: 2px;
        background: #fff;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
      }

      .question-detail {
        margin-bottom: 30px;
      }

      .answer-title {
        text-align: center;
        margin-top: 10px;

        span {
          position: relative;
        }

        span::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 2px;
          background: #fff;
          left: -14px;
          top: 50%;
          transform: translateY(-50%);
        }

        span::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 2px;
          background: #fff;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
        }

      }

      .goods-answer-detail {
        .star-number {
          img {
            width: 15px;
            height: 15px;
          }
        }

        .answer-text {
          line-height: 30px;
          padding: 0 10px;
          background: #fff;
          color: #333f50;
          border-radius: 5px;
          position: relative;
        }
      }

      .other-answer-detail {
        .answer-text {
          line-height: 30px;
          padding: 0 10px;
          background: #bfbfbf;
          color: #333f50;
          border-radius: 5px;
          position: relative;
        }

        .answer-text-left::before {
          border-right-color: #bfbfbf;
        }
      }

      .my-answer {
        .my-answer-title {
          margin-top: 80px;

        }

        .answer-text {
          line-height: 30px;
          padding: 0 10px;
          background: #bfbfbf;
          color: #333f50;
          border-radius: 5px;
          position: relative;
        }

        .answer-text::before {
          right: -10px;
          content: '';
          width: 0;
          height: 0;
          position: absolute;
          top: 15px;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #bfbfbf;
        }
      }
    }
  }

  .answer-text-left::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: -10px;
    top: 15px;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: #fff;
  }

  .input-modal {
    position: absolute;
    bottom: 20px;
    height: 35px;
    line-height: 35px;
    width: 290px;

    .input-new-contain {
      flex: 1;
      border: 1px solid #859ecc;
      border-radius: 35px;
      margin-right: 20px;
      padding: 0 10px;

      input {
        background: transparent;
        color: #fff;
      }

      input::placeholder {
        color: #fff;
      }
    }

    .submit {
      width: 60px;
      height: 35px;
      border: 1px solid #859ecc;
      border-radius: 35px;
      background: #686e71;
      text-align: center;
    }
  }
</style>