import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/index.html'
    },
    {
      path: '/decarb-time-calculator',
      name: 'decarb time calculator',
      component: () => import('./views/DecarbTimeCalculator.vue'),
      meta: {
        description: 'Cannabis decarb time calculator. Easy-to-use tool for creating potent THC-infused edibles. Edible decarboxylation temperature calculator'
      }
    },
    {
      path: '/dosage-calculator',
      name: 'edible dosage calculator',
      component: () => import('./views/DosageCalculator.vue')
    },
    { path: '*',
      component: () => import('./views/404.vue')
    }
  ]
})

export default router
