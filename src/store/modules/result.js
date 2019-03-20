/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import api from '@/utils/api'
import { countSectionBoundedBox } from '@/utils/computeCoords'

const INIT_RESULT_PROCESS = 'INIT_RESULT_PROCESS'
const SET_PAGE_RESULT = 'SET_PAGE_RESULT'
const ADD_IMAGE_TO_RESULT = 'ADD_IMAGE_TO_RESULT'
const SEND_RESULT_REQUEST = 'SEND_RESULT_REQUEST'
const SEND_RESULT_SUCCESS = 'SEND_RESULT_SUCCESS'
const SEND_RESULT_ERROR = 'SEND_RESULT_ERROR'
// initial state
const state = {
  isDone: false,
  isProcessing: false,
  error: null,
  // array of pages
  details: [{
    image: null,
    sections: [{
      id: 0,
      type: 'default',
      coords: {},
      styles: {}
    }]
  }]
}

// getters
const getters = {}

// actions
const actions = {
  initResultProcess({ commit }) {
    commit(INIT_RESULT_PROCESS)
    // get image name
    // add to json
    // send result
  },

  setPageResult({ commit }, { sections, order }) {
    commit(SET_PAGE_RESULT, { sections, order })
  },

  addImageToResult({ commit }, { image, pageId }) {
    commit(ADD_IMAGE_TO_RESULT, { image, pageId })
  },

  sendResult({ commit }, details) {
    // TODO: json api
    commit(SEND_RESULT_REQUEST)
    api.uploadJSON(details).then((res) => {
      commit(SEND_RESULT_SUCCESS)
      return res
    }).catch((e) => {
      commit(SEND_RESULT_ERROR, e)
      throw new Error(e)
    })
  },
}

// mutations
const mutations = {
  SEND_RESULT_REQUEST(state) {
    state.isDone = false
    state.isLoading = true
    state.error = null
  },

  SEND_RESULT_SUCCESS(state) {
    state.isDone = true
    state.isLoading = false
  },

  SEND_RESULT_ERROR(state, error) {
    state.isDone = false
    state.isLoading = false
    state.error = error.toString
  },

  SET_PAGE_RESULT(state, { sections, order }) {
    state.details[order] = sections
  },

  INIT_RESULT_PROCESS(state) {
    state.isProcessing = true
  },

  ADD_IMAGE_TO_RESULT(state) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
