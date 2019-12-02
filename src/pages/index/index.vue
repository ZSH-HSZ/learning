<template>
  <div class="app-index">
    <div class="index11-left">
      <div class="index11-time">13:42</div>
      <div class="index11-date">2019-12-2 星期五</div>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {},
        modal: ''
      }
    },
    mounted() {
      this.query()
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
        this.modal = val
        this.$router.push({
          query: {
            ...this.$route.query,
            modal: val
          }
        })
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
    width: 420px;
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
