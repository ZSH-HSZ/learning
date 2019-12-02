<template>
  <div class="index13">
    <div class="app-index13">
      <div class="index13-title">
        <div class="none">1</div>
        <div class="title">- 任务排名 -</div>
        <img src="../../static/images/10.png" alt="">
      </div>
      <div class="index13-main">
        <div class="index13-left">
          <div class="left-header"><img src="../../static/images/10.png" alt=""></div>
          <div class="left-center">
            <ul>
              <li>
                <div class="li-left">
                  1&emsp;王小五
                </div>
                <div class="li-righ">
                  98分
                </div>
              </li>
              <li>
                <div class="li-left">
                  1&emsp;王小五
                </div>
                <div class="li-righ">
                  98分
                </div>
              </li>
              <li>
                <div class="li-left">
                  1&emsp;王小五
                </div>
                <div class="li-righ">
                  98分
                </div>
              </li>
              <li>
                <div class="li-left">
                  1&emsp;王小五
                </div>
                <div class="li-righ">
                  98分
                </div>
              </li>

            </ul>
          </div>
          <div class="left-footer">我的份 78 &emsp;&emsp; 排名 99</div>
        </div>
        <div class="index13-right">
          <div class="right-header">我有2个学习任务未完成</div>
          <div class="right-1"></div>
          <div class="right-2">22人已学习</div>
          <div class="right-1"></div>
          <div class="right-2">22人已学习</div>
          
          <div class="right-header right-header1">我有2个学习任务未完成</div>
          <div class="right-1"></div>
          <div class="right-2">22人已学习</div>
          <div class="right-1"></div>
          <div class="right-2">22人已学习</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index13",
    data() {
      return {

      }
    },
    components: {},
    methods: {


    },
    mounted() {

    },

  }

</script>

<style scoped>
  .index13 {
    display: flex;
    padding: 150px;
  }

  .app-index13 {
    width: 881px;
    /* height: 484px; */
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
    display: flex;
    justify-content: start;
  }

  .index13-main .index13-left {
    width: 280px;

    margin: 0 30px;
  }

  .left-header {
    border-bottom: 1px solid #dedede;
  }

  .left-header img {
    width: 14px;
    height: 24px;
    display: block;
    margin: 10px auto;

  }

  .left-center ul li {
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    font-family: PingFang;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    margin: 5px auto;
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
      margin-top: 15px; 
  }

  .index13-right .right-1 {
    width: 291px;
    height: 12px;
    border-radius: 6px;
    background: yellow;
    margin: 8px auto;
  }

  .index13-right .right-2 {
    font-size: 17px;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: left;
  }

</style>
