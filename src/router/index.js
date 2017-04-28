import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../components/Pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pages.Home
    },
    {
      path: '/company',
      name: 'company',
      component: Pages.Company
    },
    {
      path: '/news',
      name: 'news',
      component: Pages.News
    },
    {
      path: '/product',
      name: 'product',
      component: Pages.Product
    },
    {
      path: '/join',
      name: 'join',
      component: Pages.Join
    },
    {
      path: '/contact',
      name: 'contact',
      component: Pages.Contact
    },
    {
      path: '/notice',
      name: 'notice',
      component: Pages.Notice
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Pages.Post
    },
    {
      path: '*',
      name: '404',
      component: Pages.NotFound
    }
  ]
})
