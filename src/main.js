import Vue from 'vue'
import Toastr from 'vue-semantic-ui-toastr'
import App from './App.vue'
import '@/assets/styles/main.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Toastr, {
  duration: 3000,
  container: '.toastr-container',
  autoshow: true,
  html: false,
  position: 'right top'
})
