/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
const state = {
  id: null,
  index: 0,
  sections: []
}

// getters
const getters = {}

// actions
const actions = {
  // loadSettings({ commit }) {
  //   // shop.getProducts((products) => {
  //     commit('setFontFamily', products)
  //   // })
  // }
}

// mutations
const mutations = {
  // setFontFamily(state, font) {
  //   state.fontFamily = font
  // },
  //
  // setFontSize(state, size) {
  //   state.fontSize = size
  // },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
