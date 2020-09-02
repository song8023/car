<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item,index) in titles"
          :class="{active: index===currentindex}"
          @click="tabclick(index)"
    >     
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabcontrol',
  props: {
    titles: {
      type: Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      currentindex: 0
    }
  },
  methods: {
    tabclick(index){
      this.currentindex = index
      this.$emit('itemclick', index)
    }
  }
}
</script>
  
<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.tab-item {
  flex: 1;
}
.tab-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
  /* color: pink; */
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>