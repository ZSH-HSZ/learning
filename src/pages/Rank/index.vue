<template>
  <div v-if="visible" class="index13 dialog-component">
    <div class="app-index13 dialog-body">
      <CTitle title="任务排名" @dialogClose="closeDialog()"></CTitle>
      <div class="index13-main">
        <div class="index13-right">
          <div class="right-header">我有{{$_.get(taskStatus, 'pending.length')}}个学习任务未完成</div>
          <div v-for="(item, index) in $_.get(taskStatus, 'pending')" :key="index">
            <ProgressOld class="com-progress" :percent="item.done_rate" :label="item.label" />
            <div class="right-2">{{item.title}}</div>
          </div>
          
          <div class="right-header right-header1">我有{{$_.get(taskStatus, 'finished.length')}}个学习任务已完成</div>
          <div v-for="(item, index) in $_.get(taskStatus, 'finished')" :key="`${index}${item.title}`">
            <ProgressOld class="com-progress" :percent="item.done_rate" :label="item.label" background="#00cc6a" />
            <div class="right-2">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressOld from '../../components/ProgressOld'
  export default {
    components: {
      ProgressOld,
    },
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
        taskStatus: {}
      }
    },
    mounted () {
    },
    methods: {
      query() {
        this.$store.dispatch('taskList')
        .then(res=>{
          this.taskStatus = res
        })
      },
      closeDialog() {
        this.$emit('closeDialog', 'task')
      }
    },
  }

</script>

<style lang="less" scoped>
  .index13.dialog-component {
    .dialog-body {
    }
  }
  .app-index13 {
    height: 500px;
    background: rgba(255, 255, 255, .93);
    margin: auto;
    padding-bottom: 35px;
  }

  .index13-title {
    display: flex;
    justify-content: space-between;
    padding: 30px 15px;
  }

  .index13-title .none {
    color: transparent;
  }

  .index13-title .title {
    font-size: 30px;
    font-family: PingFang;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .index13-title img {
    width: 25px;
    height: 25px;
  }

  .index13-main {
    margin-top: 44px;
    display: flex;
    justify-content: flex-start;
  }

  .index13-main .index13-left {
    width: 280px;
    margin: 0 30px;
  }

  .left-header {
    border-bottom: 1px solid #dedede;
  }

  .left-header img {
    height: 24px;
    display: block;
    margin: 10px auto 18px;

  }

  .left-center ul li {
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    font-family: PingFang;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    margin: 30px auto;
  }

  .index13-left .left-footer {
    width: 270px;
    height: 33px;
    line-height: 33px;
    opacity: 0.43;
    background: #687689;
    color: rgba(255, 255, 255, 1);
  }

  .index13-main .index13-right {
    /* width: 280px; */
  }

  .index13-right .right-header {
    font-size: 22px;
    font-family: PingFang;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: left;
  }
  .index13-right .right-header1 {
      margin-top: 50px; 
  }

  .index13-right .right-2 {
    font-size: 17px;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    margin-top: 7px;
  }

</style>

<style lang="less">
  .com-progress {
    margin-top: 20px;
  }
</style>