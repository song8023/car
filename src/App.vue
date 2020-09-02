<template>
<div id="app">
    <router-view></router-view>
    <mainbar></mainbar>
  </div>

</template>

<script>
import mainbar from './components/content/mainbar'

export default {
  name: 'App',
  components: {
    //  Tabbar,
    // Tabbaritem
    mainbar
  }
}
</script>

<style scoped>
@import "assets/css/base.css";

</style>
