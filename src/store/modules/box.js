/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/*
 store data about boundedBox
 */
import { countSectionBoundedBox } from '@/utils/computeCoords'

const SET_BOX_COORDS = 'SET_BOX_COORDS'
const SET_COORDS_IN_PAGE = 'SET_COORDS_IN_PAGE'
const CLEAR_BOXES = 'CLEAR_BOXES'

// const initialStateSection = {
//   id: null,
//   type: 'default',
//   coords: {
//
//   },
//   styles: {
//     fontFamily: DEFAULT_FONT,
//     fontSize: DEFAULT_FONT_SIZE
//   }
// }

const state = {
  boxByHash: {},
  pagesByHash: {},
  maxPages: 0,
  result: []
}

// getters
const getters = {
  isReady: state => state.result.length === state.maxPages
}

// actions
const actions = {
  setCoords({ commit, rootState, dispatch }, payload) {
    commit(SET_BOX_COORDS, {
      box: payload,
      maxPages: rootState.settings.page.count
    })

    dispatch('setCoordsInPage')
  },

  setCoordsInPage({ commit }) {
    commit(SET_COORDS_IN_PAGE)
  },

  clearBox({ commit }) {
    commit(CLEAR_BOXES)
  }
}

// mutations
const mutations = {
  SET_BOX_COORDS(state, { box: { coords, boxId, pageId, type }, maxPages }) {
    state.maxPages = maxPages
    if (type === 'page' || !pageId) {
      // it's page
      state.pagesByHash = { ...state.pagesByHash, [boxId]: { coords, pageId: boxId } }
    } else {
      state.boxByHash = { ...state.boxByHash, [boxId]: { coords, pageId, boxId, type } }
    }
  },

  SET_COORDS_IN_PAGE(state) {
    const pages = Object.values(state.pagesByHash)
    const sections = Object.values(state.boxByHash)
    if (pages.length && sections.length) {
      const resultBoxes = countSectionBoundedBox({ pages, sections })
      state.result = resultBoxes
    }
  },

  CLEAR_BOXES(state) {
    state.boxByHash = {}
    state.pagesByHash = {}
    state.result = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
