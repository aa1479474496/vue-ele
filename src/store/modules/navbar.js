
let w = window.innerWidth
let phoneNav, hideNavBar, siderClass

if (w < 769) {
  phoneNav = true
  siderClass = 'phoneNav'
}
else if (w < 1300) {
  hideNavBar = true
  siderClass = 'foldNav'
}
else {
  siderClass = ''
}


const state = {
  phoneNav,
  hideNavBar,
  siderClass
}

const getters = {
  phoneNav: state => state.phoneNav,
  hideNavBar: state => state.hideNavBar,
  siderClass: state => state.siderClass,
}



// mutations
const mutations = {
  ['PHONE_NAV'](state, data) {
    state.phoneNav = data
  },
  ['IS_NAV_BAR'](state, data) {
    state.hideNavBar = data
  },
  ['SIDER_CLASS'](state, data) {
    state.siderClass = data
  },

}
const actions = {
  phoneNav({ commit }, data) {
    return commit('PHONE_NAV', data)
  },
  isNavbar({ commit }, data) {
    return commit('IS_NAV_BAR', data)
  },
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