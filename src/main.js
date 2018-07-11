// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store/index'

import '@/assets/css/index.scss'
import lazyload from '@/components/common/directive.js'
lazyload();
import './permission'

Vue.use(ElementUI)
// Vue.use(lazyload)

Vue.config.productionTip = false
window.onscroll = function () {
  lazyload();
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
