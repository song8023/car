<template>
  <div class="home">
    <Nav-Bar class="home-nav"><div slot="center">购物街</div></Nav-Bar>

    <Scroll class="gun" ref="scroll" 
            :probeType="3"  
            @scroll="contentscroll" 
            :pullUpLoad="true" 
            @pullingUp="loadmore"
    >
    <Swiper class="slideshow">
    <swiper-item v-for= "item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
    </Swiper>
    <Recommend :recommends='recommends'></Recommend>
    <Feature></Feature>
    <tab-control class="control" :titles="['流行','新款','精选']"
      @itemclick="itemclick"
    ></tab-control>
    <good-list :goods="showgoods"></good-list>sh
    </Scroll>

    <back-top @click.native="topclick" v-show="showtopclick"></back-top>
  
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
import Swiper from 'components/common/swiper/swiper'
import SwiperItem from 'components/common/swiper/swiperitem'
import Scroll from 'components/common/scroll/scroll'

import TabControl from 'components/content/tab-control'
import GoodList from 'components/content/goodlist'
import BackTop from 'components/content/backtop'

import Recommend from './children/recommend'
import Feature from './children/Featureview'

import {gethome,getgoods} from 'network/home.js'

export default {
  name: 'home',
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    TabControl,
    Recommend,
    Feature,
    GoodList,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      goodtype: 'pop',
      showtopclick: false
      
    }
  },
  computed: {
    showgoods(){
      return this.goods[this.goodtype].list
    }
  },
 
  created() {
    // gethome().then(res => {
      // console.log(res);
    //   this.banners = res.data.banner.list;
    //   this.recommends = res.data.recommend.list
    // }),
    this.gethome()
    this.getgoods('pop')
    this.getgoods('new')
    this.getgoods('sell')

    this.$bus.$on('itemimageload', () => {
      this.$refs.scroll.scroll.refresh()
    })
  },

  methods: {
    // 方法
    itemclick(index){
      switch(index){
        case 0:
          this.goodtype = 'pop'
          break
        case 1:
          this.goodtype = 'new'
          break
        case 2:
          this.goodtype = 'sell'
          break
      }
    },
    topclick(){
      this.$refs.scroll.scroll.scrollTo(0, 0)
    },
    contentscroll(position){
      this.showtopclick = (-position.y) > 1000
    },
    loadmore(){
      this.getgoods(this.goodtype)
    },



    // 网络请求相关
    gethome(){
      gethome().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    })
    },
    getgoods(type){
      const page = this.goods[type].page + 1
      getgoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
  /* .home {
    height: 100vh;
    padding-top: 44px;
    position: relative;
  } */
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    margin-bottom: 44px;
  }
  .slideshow {
    margin-top: 44px;
  }
  .control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  /* .gun {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  } */

/* .gun {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
  /* .gun {
    height: 300px;
  } */
  
</style>