<template>
  <div>
    <draw-dialog :visible.sync="visible" />
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
    data() {
      return {
        visible: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>