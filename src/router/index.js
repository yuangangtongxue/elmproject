import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import search from '@/page/search'
import order from '@/page/order'
import mine from '@/page/mine'
import detailnav from '@/page/detailnav'
import storeitem from '@/page/storeitem'
import givemoney from '@/page/givemoney'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/detailnav',
      name: 'detailnav',
      component: detailnav
    },
    {
      path: '/storeitem',
      name: 'storeitem',
      component: storeitem
    },
    {
      path: '/givemoney',
      name: 'givemoney',
      component: givemoney
    },
  ]
})
