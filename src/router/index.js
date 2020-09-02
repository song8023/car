import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Home = () =>
    import ('../views/home/home.vue')
const Categra = () =>
    import ('../views/class/class.vue')
const Shopcar = () =>
    import ('../views/shopcar/shopcar.vue')
const Profile = () =>
    import ('../views/profile/profile.vue')
const Detail = () =>
    import ('../views/detail/detail.vue')
export default new Router({
    routes: [
        // {
        //   path: '/',
        //   name: 'HelloWorld',
        //   component: HelloWorld
        // }
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/categra',
            component: Categra
        },
        {
            path: '/shopcar',
            component: Shopcar
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/detail/:iid',
            component: Detail
        }

    ],
    mode: 'history'
})