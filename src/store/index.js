import Vue from 'vue'
import Vuex from 'vuex'
import logger from './modules/logger'
import section from './modules/section'
import page from './modules/page'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    section,
    page,
    logger
  },
  strict: debug
})
