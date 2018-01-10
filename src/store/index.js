import Vue from 'vue'
import Vuex from 'vuex'

import navbar from './modules/navbar'
import routes from './modules/routes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    navbar,
    routes
  },
  strict: debug
})