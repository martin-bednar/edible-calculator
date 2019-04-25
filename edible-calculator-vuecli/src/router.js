import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/decarb-time-calculator',
      name: 'decarb time calculator',
      component: () => import('./views/DecarbTimeCalculator.vue'),
      meta: {
        title: 'Cannabis decarb time calculator',
        description: 'Cannabis decarb time calculator. Easy-to-use tool for creating potent THC-infused edibles. Edible decarboxylation temperature calculator'
      }
    },
    {
      path: '/dosage-calculator',
      name: 'edible dosage calculator',
      component: () => import('./views/DosageCalculator.vue')
    },
    { path: '*',
      component: () => import('./views/404.vue'),
      meta: {
        title: 'Oops 🤢'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? (to.meta.title + ' 🍍 Edible calculator') : '🍍 Edible Calculator - The cannabis decarboxylation calculator'

  next()
})

export default router
