// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mapboxgl from 'mapbox-gl'
import App from './App'
import router from './router'
import './antd'
import echarts from 'echarts'
import 'echarts-gl'
import './styles/index.scss'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.prototype.$echarts = echarts

mapboxgl.accessToken = 'pk.eyJ1IjoibHNxMjEwIiwiYSI6ImNqZXd6NzVyYzB6b24ydnBzOWFhZ3FpNTQifQ.y4iy69PepyhrkJ98qjzykg'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
