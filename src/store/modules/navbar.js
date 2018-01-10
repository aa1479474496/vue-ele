
let w = window.innerWidth
let phoneNav, hideNavBar

if (w < 769) {
  phoneNav = true
}
else if (w < 1300) {
  hideNavBar = true
}


const state = {
  isFold: w < 769,
  phoneNav,
  hideNavBar,
}

const getters = {
  isFold: state => state.isFold,
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
  ['CHANGE_WINDOW_WIDTH'](state, data) {
    state.isFold = data
  },
  ['TOGGLE_FOLD'](state) {
    state.isFold = !state.isFold
  }
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
  },
  toggleFold({ commit }) {
    return commit('TOGGLE_FOLD')
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}