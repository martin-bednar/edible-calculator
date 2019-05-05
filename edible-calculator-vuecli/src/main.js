import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: ['UA-138222512-1', 'UA-138222512-2'],
  router
})
