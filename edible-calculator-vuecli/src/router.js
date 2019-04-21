import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      component: () => import('./views/DecarbTimeCalculator.vue')
    },
    {
      path: '/dosage-calculator',
      name: 'edible dosage calculator',
      component: () => import('./views/DosageCalculator.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/testink',
      name: 'testink',
      component: () => import('./views/Testink.vue')
    },
    { path: '*',
      component: () => import('./views/404.vue')
    }
  ]
})
