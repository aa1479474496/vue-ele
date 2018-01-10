
let w = window.innerWidth
let phoneNav, hideNavBar

if (w < 769) {
  phoneNav = true
}
else if (w < 1300) {
  hideNavBar = true
}


const state = {
  phoneNav,
  hideNavBar,
}

const getters = {
  phoneNav: state => state.phoneNav,
  hideNavBar: state => state.hideNavBar,
}



// mutations
const mutations = {
  ['PHONE_NAV'](state, data) {
    state.phoneNav = data
  },
  ['IS_NAV_BAR'](state, data) {
    state.hideNavBar = data
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
    return commit('CHANGE_WINDOW_WIDTH', data)
  }

}

export default {
  state,
  getters,
  mutations,
  actions,
}