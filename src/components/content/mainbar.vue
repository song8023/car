<template>
  <Tabbar class="bar">
      <Tabbaritem path="/home" activcolor="red">
        <img slot="item-icon" src="../../assets/img/tabbar/shouye.png" alt="">
        <div slot="item-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/categra">
        <img slot="item-icon" src="../../assets/img/tabbar/fenlei.png" alt="">
        <div slot="item-text">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/shopcar">
        <img slot="item-icon" src="../../assets/img/tabbar/gouwuchezhengpin.png" alt="">
        <div slot="item-text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/profile">
        <img slot="item-icon" src="../../assets/img/tabbar/daohanglan-05.png" alt="">
        <div slot="item-text">我的</div>
      </Tabbaritem>
    </Tabbar>   
</template>

<script>
import Tabbar from '../common/tabbar/Tabbar.vue'
import Tabbaritem from '../common/tabbar/Tabbaritem.vue'

export default {
  components: {
     Tabbar,
    Tabbaritem
  }
}
</script>

<style>
.bar {
  background-color: #fff;
}
.bar img {
  margin-top: 3px;
}
</style>