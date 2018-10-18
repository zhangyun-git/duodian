import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Footer from '@/components/footer'
import Login from '@/components/login'
import frist from '@/components/router1/frist.vue'
import discover from '@/components/router1/discover.vue'
import vip from '@/components/router1/vip.vue'
import shopcar from '@/components/router1/shopcar.vue'
import my from '@/components/router1/my.vue'
import Location from '@/views/location'
import search from '@/components/search'
import NewAddress from '@/components/newaddress'
import Pperation from '@/views/operation'
Vue.use(Router)
var loginPath = ['/my']


const router = new Router({
    mode: "history",
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
    }, {
        path: '/login',
        component: Login,
    }, {
        path: '/footer',
        component: Footer
    }, {
        path: '/frist',
        component: frist,
    }, {
        path: '/discover',
        component: discover
    }, {
        path: '/vip',
        component: vip
    }, {
        path: '/shopcar',
        component: shopcar
    }, {
        path: '/my',
        component: my
    }, {
        path: '/location',
        component: Location
    }, {
        path: '/search',
        component: search
    }, {
        path: '/newaddress',
        component: NewAddress
    }, {
        path: '/pperation',
        component: Pperation
    }]
})
router.beforeEach((to, from, next) => {
    console.log('路由进入前')
    if (document.cookie.indexOf('token') === -1) {
        if (loginPath.indexOf(to.path) !== -1) {
            next({
                path: '/login',
                query: {
                    redirectUrl: to.path
                }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
router.afterEach((to, from) => {
    console.log('页面打开')
})
export default router