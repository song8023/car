<template>  
    <div class="tabbar-item"  @click="iclick">
      <div><slot name="item-icon"></slot></div>
      <div :style="activestyle"><slot name="item-text"></slot></div>
    </div>
 
</template>

<script>
export default {
  name: 'Tabbaritem',
  props: {
    path: String,
    activcolor: {
      type: String,
      default: 'red'
    }
  },
  // data(){
  //   return{
      // isactive: true
  //   }
  // },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;       
      },
    activestyle(){
      return this.isActive? {color: this.activcolor} : {}
    }    
    },
  
  methods: {
    iclick(){
      this.$router.replace(this.path).catch(err => { console.log(err)})
    }
  }
}
</script>

<style>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
}

</style>