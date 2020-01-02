import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/draw',
    name: 'draw',
    component: function () {
      return import('../pages/DrawDialog/index.vue')
    }
  },
  {
    path: '/test',
    name: 'test',
    component: function () {
      return import('../pages/test/index.vue')
    }
  },
 
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
