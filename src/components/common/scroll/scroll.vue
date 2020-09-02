<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
  }
  },

  data() {
    return {
      scroll: null,
      message: '赖莹'
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
     pullUpLoad: this.pullUpLoad
    })
    // this.scroll.scrollTo(0,0)
    // 监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll',position)
    })
      // console.log(this.scroll);
      // this.scroll.scrollerHeight = 50000

    // 监听上拉事件
    this.scroll.on('pullingUp', () =>{
      this.$emit('pullingUp')
    })
  },
}
</script>

<style scoped>

</style>