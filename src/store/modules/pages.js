/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/*
  File for generation pages
 */
import shuffle from 'lodash/shuffle'
// import uniqueId from 'lodash/uniqueId'

const GENERATE_PAGE_BLOCKS = 'GENERATE_PAGE_BLOCKS'

// initial state
const state = {
  blocks: [
    // [1...10]
  ],
  // isGenerating: false,
  // pages: [{
  //   order: 0,
  //   sections: [] // 'title', 'paragraph'...
  // }]
}

// getters
const getters = {}

// actions
const actions = {
  generatePageBlocks({ commit, rootState, dispatch }) {
    commit(GENERATE_PAGE_BLOCKS, rootState.settings.page)
    dispatch('box/clearBox', true, { root: true })
  }
}

// mutations
const mutations = {
  GENERATE_PAGE_BLOCKS(state, { count, countInBlock, sections }) {
    console.log('GENERATE_PAGE_BLOCKS', state, count, countInBlock)
    // const blocks = []
    const pages = []
    for (let i = 1; i <= count; i++) {
      pages.push({
        id: i,
        sections: shuffle(sections)
      })
      // TODO: add blocks
      // if (i % countInBlock === 0) {
      //   blocks.push(pages)
      //   pages = []
      // }
      //
      // if (i === count && pages.length) {
      //   blocks.push(pages)
      // }
    }

    state.blocks = pages
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
