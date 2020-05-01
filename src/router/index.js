import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'map'
    },
    {
      path: '/map',
      name: 'Map',
      component: require('@/views/Map').default
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: require('@/views/Analysis').default
    },
    {
      path: '/model',
      name: 'Model',
      component: require('@/views/Model').default
    },
    {
      path: '/about',
      name: 'About',
      component: require('@/views/About').default
    }
  ]
})
