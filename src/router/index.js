import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../pages/index/index.vue')
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
