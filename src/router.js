import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // Remove until I stop using github pages
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/cracked',
      name: 'cracked',
      component: () => import('./views/Cracked.vue')
    },
    {
      path: '/wood-ash',
      name: 'wood-ash',
      component: () => import('./views/WoodAsh.vue')
    }
  ]
})
