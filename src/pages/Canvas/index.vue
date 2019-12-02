<template>
  <div>
    <DrawDialog :visible.sync="visible"></DrawDialog>
  </div>
</template>

<script>
  import {
    DrawDialog
  } from './DrawDialog.umd.min.js'
  export default {
    components: {
      DrawDialog,
    },
    watch: {
      visible(newValue, oldValue) {
        this.$router.push('/')
      }
    },
    data() {
      return {
        visible: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>