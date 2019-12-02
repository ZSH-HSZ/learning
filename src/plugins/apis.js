import {
  get,
  post,
  del,
  put,
  patch
} from '../apis/index'

const apis = {
  //注册
  install(Vue) {
    Vue.prototype.$get = get
    Vue.prototype.$post = post
    Vue.prototype.$del = del
    Vue.prototype.$put = put
    Vue.prototype.$patch = patch
    
  }
}
export default apis;