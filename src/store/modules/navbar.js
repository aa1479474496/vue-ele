
let siderClass, w = window.innerWidth

if (w < 769) {
  siderClass = 'phoneNav'
}
else if (w < 1300) {
  siderClass = 'foldNav'
}
else {
  siderClass = ''
}


const state = {
  siderClass
}

const getters = {
  siderClass: state => state.siderClass,
}

// mutations
const mutations = {
  ['SIDER_CLASS'](state, data) {
    state.siderClass = data
  },

}
const actions = {
  changeWindowWidth({ commit }, data) {
    return commit('SIDER_CLASS', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}