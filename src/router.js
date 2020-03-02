import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // Remove until I stop using github pages
  mode: 'history',
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
      path: '/gallery',
      name: 'gallery',
      component: () => import('./views/Gallery.vue')
    },
    {
      path: '/gallery/item/:id',
      name: 'item',
      component: () => import('./views/GalleryItem.vue'),
      props: true
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/Shop.vue'),
      props: true
    },
    {
      path: '/shop/item/:id',
      name: 'product',
      component: () => import('./views/Product.vue'),
      props: true
    }
  ]
})
