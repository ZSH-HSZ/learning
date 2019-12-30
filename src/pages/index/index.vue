<template>
  <div class="app-index">
    <div class="app-header-box">
    </div>
    <div class="app-header-text">
      智能学考系统
    </div>
    <div class="app-body align">
      <AppBodyLeft :userInfo="userInfo" :taskList="taskList" />
      <AppBodyCenter :userInfo="userInfo">
        <div class="align jus task-box" id="drag">
          <swiper :options="swiperOption">
            <swiper-slide class="list-task" v-for="(item, index) in $_.get(userInfo, 'app')" :key="index">
              <div @click="showModal(item)" class="align jus direction point">
                <div class="transform-icon" :style="`background-image: url(${item.icon})`"></div>
                <div>{{item.title}}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </AppBodyCenter>
      <AppBodyRight :knowledgeList="knowledgeList" @changeShow="changeShow" />
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

  import 'swiper/dist/css/swiper.css'

  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'


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
      NewProposal,

      swiper,
      swiperSlide
    },
    data() {
      return {
        userInfo: {},
        taskList: {},
        knowledgeList: {},
        activeIndex: 2,
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
        },
        swiperOption: {
          slidesPerView: 5,
          initialSlide: 2,
          spaceBetween: 20,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    watch: {
      modalControl(newValue, oldValue) {
        if (!newValue.draw) {
          this.$router.push({
            query: {}
          })
        }
      }
    },
    mounted() {
      if (this.$route.query.modal) {
        this.$set(this.modalControl, this.$route.query.modal, true)
      }
      this.getTask()
      this.query()
      this.getKnowledge('new')
      this.addListner()
    },
    methods: {
      showDetail(val) {
        this.$set(this.modalControl, this.$route.query.modal, true)
      },
      addListner() {
        let drag = document.getElementById('drag')
        drag
      },
      getTask() {
        this.$post({
            road: 'task'
          })
          .then(res => {
            this.taskList = res
          })
      },
      query() {
        this.$post({
            road: 'userInfo'
          })
          .then(res => {
            this.userInfo = res
          })
      },
      getKnowledge(dtype) {
        this.$post({
            road: 'knowledge',
            data: {
              dtype
            }
          })
          .then(res => {
            this.knowledgeList = res
          })
      },
      changeShow(val) {
        this.knowledgeList = {}
        this.getKnowledge(val)
      },
      showModal(item) {
        console.log(item)
        let uri = item.uri
        if (/http:/.test(item.uri)) {
          window.location.href = item.uri
        } else {
          let query = Object.assign({}, this.$route.query)
          if (this.show[uri]) {
            this.$set(this.modalControl, this.show[uri], true)
            this.$router.push({
              query: this.$_.assign(query, {
                modal: uri
              })
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
  .app-index {
    padding-top: 50px;
  }
  .app-body {
    color: #fff;
  }
  .app-header-box {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 0;
    border-top: 50px solid rgba(0, 0, 0, 0.7);
    border-right: 37px solid transparent;
    border-left: 37px solid transparent;
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
    color: #fff;
  }

  .task-box {
    position: relative;
    width: 500px;
    margin: 0 auto;
    user-select: none;
    .list-task {
      text-align: center;
      font-size: 14px;
    }

    .swiper-slide-active {
      font-size: 20px;
      padding-top: 20px;
      .transform-icon {
        width: 65px;
        height: 65px;
      }
    }

    .swiper-slide-prev,
    .swiper-slide-next {
      font-size: 18px;
      padding-top: 10px;
      .transform-icon {
        width: 55px;
        height: 55px;
      }
    }

    .transform-icon {
      background-size: cover;
      margin: 0 auto 5px;
      width: 50px;
      height: 50px;
      transition: all .2s linear;
    }
  }
</style>

<style scoped>
  .swiper-slide {
    width: 60%;
  }

  .swiper-slide:nth-child(2n) {
    width: 40%;
  }

  .swiper-slide:nth-child(3n) {
    width: 20%;
  }

  .list-task.swiper-slide {
    width: 100px;
  }
</style>