import { asyncRouterMap, constantRouterMap } from '@/router'

const state = {
  routers: [],
  addRouters: []
}
const getters = {
  routers: state => state.routers,
  addRouters: state => state.addRouters,
}
// JSON.parse(JSON.stringify(authData))
const mutations = {
  ['SET_ROUTERS'](state) {
    // state.addRouters = asyncRouterMap.slice()
    // state.routers = constantRouterMap.concat(asyncRouterMap)

    // let routers = asyncRouterMap.slice()
    // let addRouters = constantRouterMap.concat(asyncRouterMap)
    // state = Object.assign({},{routers,addRouters})
    // console.log(state);


    state.addRouters = JSON.parse(JSON.stringify(asyncRouterMap))
    state.routers = JSON.parse(JSON.stringify(constantRouterMap))
    // state.routers = JSON.parse(JSON.stringify(constantRouterMap.concat(asyncRouterMap)))
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      // let accessedRouters = asyncRouterMap
      commit('SET_ROUTERS')
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}