import CTitle from '../components/Title.vue'
import Progress from '../components/Progress.vue'
import _ from 'lodash'
const components = {
  //注册
  install(Vue) {
    Vue.component('CTitle', CTitle);
    Vue.component('Progress', Progress);
    Vue.prototype.$_ = _
  }
}
export default components;