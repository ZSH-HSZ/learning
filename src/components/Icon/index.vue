<template>
    <svg class="icon" :class="propClass" aria-hidden="true" :style="{width: size,height: size}">
      <use :xlink:href="iconRoad"></use>
    </svg>
</template>

<script>
  export default {
    props: {
      type: String,
      size: {
        type: String,
        default: '20px'
      },
      propClass: String,
    },
    computed: {
      iconRoad() {
        return `#icon-${this.type}`
      }
    }
  }

</script>

<style lang='less' scoped>
  .icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
