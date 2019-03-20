import Vue from 'vue'
import VueVirtualScroller from 'vue-virtual-scroller'
import App from './App.vue'
import store from '@/store'
import '@/assets/styles/main.less'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueVirtualScroller)
