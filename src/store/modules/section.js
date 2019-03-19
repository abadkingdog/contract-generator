/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import { DEFAULT_FONT, DEFAULT_FONT_SIZE } from '@/constants/settings'

const state = {
  id: null,
  type: 'default',
  coords: {

  },
  fontFamily: DEFAULT_FONT,
  fontSize: DEFAULT_FONT_SIZE
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
  setFontFamily(state, font) {
    state.fontFamily = font
  },

  setFontSize(state, size) {
    state.fontSize = size
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
