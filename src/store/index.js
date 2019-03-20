import Vue from 'vue'
import Vuex from 'vuex'
import logger from './modules/logger'
import settings from './modules/settings'
import box from './modules/box'
import pages from './modules/pages'
import result from './modules/result'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    box,
    pages,
    logger,
    settings,
    result
  },
  strict: debug
})
