import Vue from 'vue'
import Vuex from 'vuex'
import {
  get,
  post,
  del,
  put,
  patch
} from '../apis/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskObj: '',
  },
  mutations: {
    saveState(state, data) {
      state.taskObj = data
    }
  },
  actions: {
    taskList({state, commit}, data) {
      return new Promise((resolve, reject) => {
        if(state.taskObj) {
          resolve(state.taskObj)
        }else {
          post({
            road: 'task'
          })
          .then(res=>{
            commit('saveState', res)
            resolve(res)
          })
        }
      })
      
    }
  },
  modules: {
  }
})
