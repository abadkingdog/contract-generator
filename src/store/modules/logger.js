/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const SET_LOGGER_VISIBILITY = 'SET_LOGGER_VISIBILITY'
const SET_LOGGER_FINISH = 'SET_LOGGER_FINISH'
const ADD_LOGGER_MESSAGE = 'ADD_LOGGER_MESSAGE'
const SET_LOGGER_IN_PROCESS = 'SET_LOGGER_IN_PROCESS'
const CLEAR_LOGGER = 'CLEAR_LOGGER'

// initial state
const state = {
  isVisible: false,
  isSaving: false,
  text: '',
  summary: '',
  duration: null
}

const combineMessage = ({ status, message, description }) => {
  switch (status) {
    case 'success':
      return `<div class="ui text success" title="${description}">${message}</div>`
    case 'error':
      return `<div class="ui text error" title="${description}">${message}</div>`
    default:
      return `<div class="ui text">${message}</div>`
  }
}

// getters
const getters = {

}

// actions
const actions = {
  showLogger({ commit }, payload) {
    commit(SET_LOGGER_VISIBILITY, payload)
    commit(SET_LOGGER_IN_PROCESS, payload)
  },

  endLogger({ commit }, payload) {
    commit(SET_LOGGER_FINISH, payload)
    commit(SET_LOGGER_IN_PROCESS, false)
  },

  addMessage({ commit }, payload) {
    commit(ADD_LOGGER_MESSAGE, payload)
  },

  clearLogger({ commit }) {
    commit(CLEAR_LOGGER)
  }
}

// mutations
const mutations = {
  SET_LOGGER_VISIBILITY(state, payload) {
    state.isVisible = payload
    state.startTimer = new Date()
  },

  SET_LOGGER_FINISH(state, payload) {
    state.summary = combineMessage(payload)
    state.duration = parseInt((new Date() - state.startTimer) / 1000, 10)
  },

  ADD_LOGGER_MESSAGE(state, payload) {
    state.text += combineMessage(payload)
  },

  SET_LOGGER_IN_PROCESS(state, payload) {
    state.isSaving = payload
  },

  CLEAR_LOGGER(state) {
    state.isVisible = false
    state.isSaving = false
    state.text = ''
    state.summary = ''
    state.duration = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
