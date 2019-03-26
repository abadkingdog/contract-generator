/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import api from '@/utils/api'
import { countSectionBoundedBox } from '@/utils/computeCoords'

const INIT_RESULT_PROCESS = 'INIT_RESULT_PROCESS'
const TAKE_BOXES_RESULT = 'TAKE_BOXES_RESULT'
const SET_PAGE_RESULT = 'SET_PAGE_RESULT'
const ADD_IMAGE_TO_RESULT = 'ADD_IMAGE_TO_RESULT'
const SEND_IMAGE_REQUEST = 'SEND_IMAGE_REQUEST'
const SEND_IMAGE_SUCCESS = 'SEND_IMAGE_SUCCESS'
const SEND_IMAGE_ERROR = 'SEND_IMAGE_ERROR'
const SEND_RESULT_REQUEST = 'SEND_RESULT_REQUEST'
const SEND_RESULT_SUCCESS = 'SEND_RESULT_SUCCESS'
const SEND_RESULT_ERROR = 'SEND_RESULT_ERROR'
const SET_PROGRESS = 'SET_PROGRESS'
const CLEAR_RESULT = 'CLEAR_RESULT'

// initial state
const state = {
  isDone: false,
  isProcessing: false,
  error: null,
  // array of pages
  details: [{
    pageId: null,
    image: null,
    sections: [{
      id: 0,
      type: 'default',
      coords: {},
      styles: {}
    }]
  }],

  images: [],
  progress: 0
}

// getters
const getters = {
  // eslint-disable-next-line arrow-body-style
  isReadyForSending: (state) => {
    // all images
    return state.images.length > 0 && (state.details.filter(s => s.image).length === state.details.length)
  }
}

// actions
const actions = {
  initResultProcess({ commit, rootState }) {
    commit(INIT_RESULT_PROCESS)
    commit(TAKE_BOXES_RESULT, rootState.box.result)
  },

  setPageResult({ commit }, { sections, order }) {
    commit(SET_PAGE_RESULT, { sections, order })
  },

  addImageToResult({ commit }, { image, pageId }) {
    commit(ADD_IMAGE_TO_RESULT, { image, pageId })
  },

  sendImageAction({ commit }, { image, pageId }) {
    return api.uploadImages(image).then((res) => {
      const { filename } = res
      commit(SEND_IMAGE_SUCCESS, { filename, pageId })
      return res
    }).catch((e) => {
      commit(SEND_IMAGE_ERROR, e)
      throw new Error(e)
    })
  },

  sendResult({ commit, state }) {
    // TODO: json api
    commit(SEND_RESULT_REQUEST)
    api.uploadJSON(state.details).then((res) => {
      commit(SEND_RESULT_SUCCESS)
      return res
    }).catch((e) => {
      commit(SEND_RESULT_ERROR, e)
      throw new Error(e)
    })
  },

  clearResults({ commit }) {
    commit(CLEAR_RESULT)
  }
}

// mutations
const mutations = {
  SEND_RESULT_REQUEST(state) {
    state.isDone = false
    state.error = null
  },

  SEND_RESULT_SUCCESS(state) {
    state.isDone = true
    state.isProcessing = false
    state.propgress = 0
  },

  SEND_RESULT_ERROR(state, error) {
    state.isDone = false
    state.isProcessing = false
    state.error = error.toString
  },

  TAKE_BOXES_RESULT(state, payload) {
    state.details = payload
  },

  INIT_RESULT_PROCESS(state) {
    state.isProcessing = true
    state.progress = 0
    state.images = []
  },

  SEND_IMAGE_SUCCESS(state, { filename, pageId }) {
    state.images = [...state.images, { filename, pageId }]

    const index = state.details.findIndex(o => o.pageId === pageId)
    const item = { ...state.details[index], image: filename }
    state.details = [
      ...state.details.slice(0, index),
      item,
      ...state.details.slice(index + 1)
    ]

    const max = state.details.length
    const cur = state.images.length
    state.progress = cur === max ? 100 : parseInt(cur * 100 / max, 10)
  },

  SEND_IMAGE_ERROR(state, error) {
    // TODO
  },

  SET_PROGRESS(state, payload) {
    state.progress = payload
  },

  CLEAR_RESULT(state) {
    state.isDone = false
    state.images = []
    state.details = []
    state.progress = 0
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
