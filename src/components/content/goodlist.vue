<template>
  <div class="goods">
   <good-item v-for="item in goods" :gooditem="item"></good-item>
  </div>
</template>

<script>
import GoodItem from './goodlistitem'
export default {
  props: {
    goods: {
      type: Array,
      default(){
        return[]
      }
    }
  },
  components: {
    GoodItem
  }
}
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>