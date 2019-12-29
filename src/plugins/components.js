import CTitle from '../components/Title.vue'
import Progress from '../components/Progress.vue'
import ProgressCircle from '../components/ProgressCircle.vue'
import Icon from '../components/Icon/index.vue'
import _ from 'lodash'
import moment from 'moment'
const components = {
  //注册
  install(Vue) {
    Vue.component('CTitle', CTitle);
    Vue.component('Progress', Progress);
    Vue.component('ProgressCircle', ProgressCircle);
    Vue.component('Icon', Icon);
    Vue.prototype.$_ = _
    Vue.prototype.$moment = moment
  }
}
export default components;