<template>
  <div class="shadow-box goods-question-and-task">
    <div class="goods-header align">
      <div v-for="(item, index) in headerTitleList" :key="index" class="align"
        :class="`${activeIndex===index?'active-label':''}`" @click="chooseActive(item, index)">
        <div class="label point">{{item.label}}</div>
        <span class="line" v-if="index<headerTitleList.length-1">|</span>
      </div>
    </div>
    <div>
      <div class="question-box">
        <div ref="questionBoxEnter" class="question-box-enter" v-if="$_.get(knowledgeList, 'list.length')">
          <div class="align question-item point" :class="`${item.margin==='right'?'reverse':''}`"
            v-for="(item, index) in $_.get(knowledgeList, 'list', [])" :key="index" @click="showQuestionDetail(item)">
            <div class="question-detail" :class="`${item.margin}`">{{item.title}}</div>
            <div class="flex-all"></div>
          </div>
        </div>
      </div>
    </div>
    <QuestionDetail :visible.sync="questionDetailShow" :info="showQuestionInfo"></QuestionDetail>
  </div>
</template>

<script>
  import QuestionDetail from '../../../components/QuestionDetail'
  export default {
    components: {
      QuestionDetail,
    },
    props: {
      knowledgeList: {
        type: Object,
      },
    },
    watch: {
      knowledgeList(newValue, oldValue) {
        this.setHide()
      }
    },
    computed: {
      knowledgeListLength() {
        return this.$_.get(this.knowledgeList, 'list.length')
      }
    },
    data() {
      return {
        activeIndex: 0,
        showQuestionInfo: {},
        questionDetailShow: false,
        headerTitleList: [{
            label: '答疑悬赏',
            dtype: 'new'
          },
          {
            label: '经典提问',
            dtype: 'hot'
          },
        ]
      }
    },
    methods: {
      chooseActive(item, index) {
        this.activeIndex = index
        this.$emit("changeShow", item.dtype)
      },
      showQuestionDetail(val) {
        this.showQuestionInfo = val
        this.questionDetailShow = true
      },
      setHide() {
        setTimeout(() => {
          let height = this.$refs.questionBoxEnter.clientHeight
          const runkeyframes = ` @keyframes getmove{
              0%{
                  transform: translateY(0);
              }
              100%{
                  transform: translateY(-${((height-335)/height)*100}%);
              }
          }`
          console.log(``)
          // 创建style标签
          const style = document.createElement('style');
          // 设置style属性
          style.type = 'text/css';
          // 将 keyframes样式写入style内
          style.innerHTML = runkeyframes;
          // 将style样式存放到head标签
          document.getElementsByTagName('head')[0].appendChild(style);
          if (height > 335) {
            this.$refs.questionBoxEnter.style =
              `animation: ${(height-335)/20}s linear 0s infinite alternate none running getmove`
          }
        }, 100);
      },
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

    .question-box {
      height: 335px;
      overflow: hidden;
    }

    .question-item.reverse {
      flex-direction: row-reverse;
    }

    .question-item {
      padding: 0 10px;
      overflow: hidden;

      .question-detail {
        min-height: 30px;
        line-height: 30px;
        padding: 0 10px;
        border: 1px solid #ccc;
        position: relative;
        margin-top: 8px;
        border-radius: 4px;
        background: #333f50;
      }

      .question-detail.left::before {
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

      .question-detail.left::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        left: -8px;
        top: 15px;
        transform: translateY(-50%);
        border: 4px solid transparent;
        border-right-color: #333f50;
      }

      .question-detail.right::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        right: -10px;
        top: 15px;
        transform: translateY(-50%);
        border: 5px solid transparent;
        border-left-color: #fff;
      }

      .question-detail.right::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        right: -8px;
        top: 15px;
        transform: translateY(-50%);
        border: 4px solid transparent;
        border-left-color: #333f50;
      }
    }

  }
</style>