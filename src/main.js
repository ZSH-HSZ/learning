import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import apis from './plugins/apis.js'
import components from './plugins/components.js'
import './DrawDialog.css';
import '../src/static/style/index.less'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(apis);
Vue.use(components);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
