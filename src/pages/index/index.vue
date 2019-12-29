<template>
  <div class="app-index">
    <!-- <div class="index11-left">
      <div class="index11-time">{{minute}}</div>
      <div class="index11-date">{{formatYY()}} 星期{{formatWeek()}}</div>
      <div class="index11-name">
        <h2 class="name-1">{{$_.get(userInfo, 'info.welcome')}}</h2>
        <div class="name-2">部门：{{$_.get(userInfo, 'info.department')}}</div>
        <div class="name-2">工号：{{$_.get(userInfo, 'info.uid')}}</div>
      </div>
      <div class="index11-name">
        <h2 class="name-1">我的成绩</h2>
        <div class="name-2" v-for="(item, index) in $_.get(userInfo, 'score')" :key="index">
          {{$_.get(item, 'title')}}：{{$_.get(item, 'score')}}
        </div>
      </div>
    </div>
    <div class="index11-right align">
      <div @click="showModal(item)" class="right-flex" v-for="(item, index) in $_.get(userInfo, 'app', [])" :key="index">
        <img :src="item.icon" alt="">
        <div>{{item.title}}</div>
        <div class="msg" v-if="Number(item.msg)">{{item.msg}}</div>
      </div>
    </div> -->
    <div class="app-header-box">
    </div>
    <div class="app-header-text">
      智能学考系统
    </div>
    <div class="app-body align">
      <AppBodyLeft />
      <AppBodyCenter>
        <div class="align jus task-box">
          <div class="border-radius"></div>
          <div class="list-task" v-for="(item, index) in [1,2,3,4,5]" :key="index" :style="`transform: translateY(${(2-Math.abs(index-2))*20}px)`">
            <img :class="`list-task-img-${2-Math.abs(index-2)}`" src="../../static/images/5.png" alt="">
            <div :class="`list-task-text-${2-Math.abs(index-2)}`">模块学习</div>
          </div>
        </div>
        
      </AppBodyCenter>
      <AppBodyRight />
    </div>

    <Question :visible="modalControl.faq" @closeDialog="closeDialog" @newQuestion="closeAndOpenNewModel"></Question>
    <NewQuestion :visible="modalControl.newQuestionDialog" @closeDialog="closeAndOpenNewModel"></NewQuestion>

    <Proposal :visible="modalControl.advise" @closeDialog="closeDialog" @newQuestion="closeAndOpenNewModel"></Proposal>
    <NewProposal :visible="modalControl.dialogProposalNew" @closeDialog="closeAndOpenNewModel"></NewProposal>

    <Rank :visible="modalControl.task" @closeDialog="closeDialog"></Rank>
    <Draw :visible.sync="modalControl.draw"></Draw>
  </div>
</template>

<script>

  import AppBodyLeft from '../../modules/index/AppBodyLeft'
  import AppBodyCenter from '../../modules/index/AppBodyCenter'
  import AppBodyRight from '../../modules/index/AppBodyRight'

  import Rank from '../Rank/index'
  import Question from '../Question/index'
  import NewQuestion from '../NewQuestion/index'
  import Proposal from '../Proposal/index'
  import NewProposal from '../NewProposal/index'
  import {
    DrawDialog
  } from '../DrawDialog/DrawDialog.umd.min.js'
  
  export default {
    components: {
      AppBodyLeft,
      AppBodyCenter,
      AppBodyRight,

      Question,
      Rank,
      NewQuestion,
      Draw: DrawDialog,
      Proposal,
      NewProposal
    },
    data() {
      return {
        userInfo: {},
        show: {
          task: 'task',
          faq: 'faq',
          draw: 'draw',
          advise: 'advise'
        },
        modalControl: {
          advise: false,
          dialogProposalNew: false,

          // 问题窗口
          faq: false,
          // 新问题窗口
          newQuestionDialog: false,


          // 排名窗口
          task: false,
          draw: false,
        }
      }
    },
    watch: {
      modalControl(newValue, oldValue) {
        if(!newValue.draw) {
          this.$router.push({query: {}})
        }
      }
    },
    mounted() {
      if(this.$route.query.modal) {
        this.$set(this.modalControl, this.$route.query.modal, true)
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
      showModal(item) {
        let uri = item.uri
        if(/http:/.test(item.uri)) {
          window.location.href = item.uri
        }else {
          let query  = Object.assign({}, this.$route.query)
          if(this.show[uri]) {
            this.$set(this.modalControl, this.show[uri], true)
            this.$router.push({
              query: this.$_.assign(query, {modal: uri})
            })
          }
        }
        
      },
      // 关闭弹窗
      closeDialog(val) {
        this.$set(this.modalControl, val, false)
      },
      openNew(val) {
        this.$set(this.modalControl, val, true)
      },
      closeAndOpenNewModel(val) {
        // 先关闭问题弹窗
        this.closeDialog(val.old)
        // 打开新问题弹窗
        this.openNew(val.new)
      },
    },
  }

</script>

<style lang='less' scoped>
  .app-header-box {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height:0;
    border-top: 50px solid rgba(0, 0, 0, 0.7);
    border-right: 37px solid transparent;
    border-left:37px solid transparent;
  }
  .app-header-text {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    height: 50px;
    width: 300px;
    line-height: 50px;
    font-size: 28px;
  }
  .task-box {
    position: relative;
    .border-radius {
      width: 500px;
      height: 100px;
      border-radius: 100%;
      position: absolute;
      left: 50px;
      top: -30px;
      border: 3px solid rgb(203, 199, 199);
    }
    .list-task {
      margin: 0 15px;
      text-align: center;
      div {

      }
      img {

      }
      .list-task-img-0 {
        width: 50px;
      }
      .list-task-img-1 {
        width: 55px;
      }
      .list-task-img-2 {
        width: 65px;
      }
      .list-task-text-0 {
        font-size: 14px;
      }
      .list-task-text-1 {
        font-size: 18px;
      }
      .list-task-text-2 {
        font-size: 20px;
      }

    }
  }
  
</style>
