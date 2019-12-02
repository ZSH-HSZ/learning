import CTitle from '../components/Title.vue'
import _ from 'lodash'
const components = {
  //注册
  install(Vue) {
    Vue.component('CTitle', CTitle);
    Vue.prototype.$_ = _
  }
}
export default components;