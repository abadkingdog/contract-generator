/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import { SECTION_SETTINGS, PAGE_SECTIONS_CONFIG, PAGES_IN_BLOCK } from '@/constants/settings'

const DEBUG_MODE = localStorage.getItem('debugMode') === 'true' || false
const SET_OPTIONS = 'SET_OPTIONS'
const SET_PAGE_COUNT = 'SET_PAGE_COUNT'
const SET_DEBUG_MODE = 'SET_DEBUG_MODE'
const SET_SECTION_CONFIG = 'SET_SECTION_CONFIG'

const sectionStates = Object.values(SECTION_SETTINGS)
  .reduce((acc, curr) => ({ ...acc, [curr.id]: null }), {})

// initial state
const state = {
  debugMode: DEBUG_MODE,
  section: sectionStates,
  page: {
    count: 1,
    sections: PAGE_SECTIONS_CONFIG,
    countInBlock: PAGES_IN_BLOCK
  }
}

// getters
const getters = {

}

// actions
const actions = {
  changeSectionSettings({ commit }, payload) {
    commit(SET_OPTIONS, payload)
  },

  setPagesCount({ commit }, count) {
    commit(SET_PAGE_COUNT, { count })
  },

  setSectionsConfig({ commit }, payload) {
    commit(SET_SECTION_CONFIG, payload)
  },

  toggleDebugMode({ commit }, payload) {
    commit(SET_DEBUG_MODE, payload)
  }
}

// mutations
const mutations = {
  SET_OPTIONS(state, { id, value }) {
    state.section[id] = value
  },

  SET_PAGE_COUNT(state, { count }) {
    state.page.count = count
  },

  SET_DEBUG_MODE(state, payload) {
    localStorage.setItem('debugMode', !!payload)
    state.debugMode = payload
  },

  SET_SECTION_CONFIG(state, payload) {
    try {
      state.page.sections = payload.split(',').map(o => o.trim())
    } catch (e) {
      state.page.sections = PAGE_SECTIONS_CONFIG
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
