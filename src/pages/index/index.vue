<template>
  <div class="app-index">
    <div class="index11-left">
      <div class="index11-time">{{minute}}</div>
      <div class="index11-date">{{formatYY()}} 星期{{formatWeek()}}</div>
      <div class="index11-name">
        <h2 class="name-1">{{$_.get(userInfo, 'info.welcome')}}</h2>
        <div class="name-2">部门：{{$_.get(userInfo, 'info.department')}}</div>
        <div class="name-2">工号：{{$_.get(userInfo, 'info.uid')}}</div>
      </div>
      <div class="index11-name">
        <h2 class="name-1">我的成绩</h2>
        <div class="name-2">{{$_.get(userInfo, 'score[0].title')}}：{{$_.get(userInfo, 'score.[1].score')}}</div>
        <div class="name-2">{{$_.get(userInfo, 'score[1].title')}}：{{$_.get(userInfo, 'score.[1].score')}}</div>
      </div>
    </div>
    <div class="index11-right">
      <div @click="showModal('rank')" class="right-flex">
        <img src="../../static/images/5.png" alt="">
        <div>任务排名</div>
      </div>
      <div @click="showModal('faq')" class="right-flex">
        <img src="../../static/images/4.png" alt="">
        <div>咨询答疑</div>
      </div>
      <div class="right-flex">
        <img src="../../static/images/3.png" alt="">
        <div>模块化系统</div>
      </div>
      <div class="right-flex">
        <img src="../../static/images/2.png" alt="">
        <div>学习培训</div>
      </div>
      <div class="right-flex">
        <img src="../../static/images/1.png" alt="">
        <div>指导书建议</div>
      </div>
    </div>
    <Question :visible.sync="dialogQuestion" @closeDialog="closeDialog" @newQuestion="newQuestion"></Question>
    <Rank :visible.sync="rank" @closeDialog="closeDialog"></Rank>
    <NewQuestion :visible.sync="newQuestionDialog" @closeDialog="closeDialog"></NewQuestion>
    <Draw :visible.sync="drawDialog"></Draw>
  </div>
</template>

<script>
  import Question from '../Question/index'
  import Rank from '../Rank/index'
  import NewQuestion from '../NewQuestion/index'
  import {
    DrawDialog
  } from '../DrawDialog/DrawDialog.umd.min.js'
  import moment from 'moment'
  export default {
    components: {
      Question,
      Rank,
      NewQuestion,
      Draw: DrawDialog
    },
    data() {
      return {
        userInfo: {},
        modal: '',
        // 问题窗口
        dialogQuestion: false,
        // 排名窗口
        rank: false,
        // 新问题窗口
        newQuestionDialog: false,
        drawDialog: false,
        show: {
          rank: 'rank',
          faq: 'dialogQuestion'
        },
        minute: this.formatHH()
      }
    },
    mounted() {
      this.getHH();
      this.query();
      if(this.$route.query.modal) {
        this.$set(this, this.show[this.$route.query.modal], true)
      }
    },
    methods: {
      query() {
        this.$post({
          road: 'userInfo'
        })
        .then(res=>{
          this.userInfo = res
        })
      },
      showModal(val) {
        this.$set(this, this.show[val], true)
        this.$router.push({
          query: {
            ...this.$route.query,
            modal: val
          }
        })
      },
      // 关闭弹窗
      closeDialog(val) {
        this.$set(this, val, false)
      },
      newQuestion() {
        // 先关闭问题弹窗
        this.closeDialog('dialogQuestion')
        // 打开新问题弹窗
        this.newQuestionDialog = true
      },
      getHH() {
        setTimeout(()=>{
          this.minute = this.formatHH();
          this.getHH()
        }, 1000)
      },
      formatHH() {
        return moment().format('HH:mm')
      },
      formatYY() {
        return moment().format('YYYY年MM月DD日')
      },
      formatWeek() {
        return ['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]
      }
    },
  }

</script>

<style scoped>
  .app-index {
    display: flex;
    justify-content: center;
    padding: 150px;
  }

  .index11-left {
    width: 300px;
    margin-right: 55px;
  }

  .index11-left .index11-time {
    font-size: 35px;
    font-family: PingFang;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 5px;
  }

  .index11-left .index11-date {
    margin: 10px auto;
    font-size: 14px;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
  }

  .index11-left .index11-name {
    background: rgba(108,168,255, .7);
    margin-bottom: 10px;
    padding: 9px;
    text-align: left;
    height: 98px;
  }

  .index11-name .name-1 {
    font-size: 20px;
    font-family: PingFang;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin: 10px auto;
  }

  .index11-name .name-2 {
    font-size: 14px;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 9px;
  }

  .index11-right {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 396px;
  }

  .index11-right .right-flex {
    width: 122px;
    height: 122px;
    margin: 5px;
    background: rgba(34,38,43,0.53);
    cursor: pointer;
  }

  .right-flex img {
    display: block;
    width: 30px;
    height: 30px;
    margin: 30px auto;
  }

  .right-flex div {
    font-size: 18px;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

</style>
