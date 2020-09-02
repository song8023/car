<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommends: {
      type: Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 8px;
}
/* .recommend-item  div{
  padding-top: 5px;
} */
</style>