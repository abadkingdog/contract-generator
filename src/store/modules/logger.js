/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const SET_LOGGER_VISIBILITY = 'SET_LOGGER_VISIBILITY'
const SET_LOGGER_FINISH = 'SET_LOGGER_FINISH'
const ADD_LOGGER_MESSAGE = 'ADD_LOGGER_MESSAGE'
const SET_LOGGER_IN_PROCESS = 'SET_LOGGER_IN_PROCESS'

// initial state
const state = {
  isVisible: false,
  isSaving: false,
  text: '',
  summary: ''
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
  }
}

// mutations
const mutations = {
  SET_LOGGER_VISIBILITY(state, payload) {
    state.isVisible = payload
  },

  SET_LOGGER_FINISH(state, payload) {
    state.summary = combineMessage(payload)
  },

  ADD_LOGGER_MESSAGE(state, payload) {
    state.text += combineMessage(payload)
  },

  SET_LOGGER_IN_PROCESS(state, payload) {
    state.isSaving = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}