<template>
  <div class="app-body-right">
    <QuestionAndTask :knowledgeList="knowledgeList" @changeShow="changeShow"></QuestionAndTask>
    <Time></Time>
  </div>
</template>

<script>
  import Time from './AppBodyRight/Time'
  import QuestionAndTask from './AppBodyRight/QuestionAndTask'
  export default {
    components: {
      Time,
      QuestionAndTask
    },
    props: {
      knowledgeList: Object
    },
    methods: {
      changeShow(val) {
        this.$emit('changeShow', val)
      }
    },
  }
</script>

<style lang="less" scoped>
  .app-body-right {
    height: 530px;
    width: 300px;
    .goods-question-and-task {
      width: 300px;
      height: 425px;
    }
    
  }
</style>