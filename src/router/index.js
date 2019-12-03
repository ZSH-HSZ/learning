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
  // {
  //   path: '/question',
  //   name: 'question',
  //   component: function () {
  //     return import('../pages/Question/index.vue')
  //   }
  // },
  // {
  //   path: '/newQuestion',
  //   name: 'new-question',
  //   component: function () {
  //     return import('../pages/NewQuestion/index.vue')
  //   }
  // },
  // {
  //   path: '/canvas',
  //   name: 'canvas',
  //   component: function () {
  //     return import('../pages/Canvas/index.vue')
  //   }
  // },
  // {
  //   path: '/rank',
  //   name: 'rank',
  //   component: function () {
  //     return import('../pages/Rank/index.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
