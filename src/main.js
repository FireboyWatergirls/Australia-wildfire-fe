// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mapboxgl from 'mapbox-gl'
import App from './App'
import router from './router'
import echarts from 'echarts'
import store from './store'
import './styles/index.scss'
import Menu from 'ant-design-vue/lib/Menu'
import 'ant-design-vue/lib/menu/style'
Vue.use(Menu)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

mapboxgl.accessToken = 'pk.eyJ1IjoibHNxMjEwIiwiYSI6ImNqZXd6NzVyYzB6b24ydnBzOWFhZ3FpNTQifQ.y4iy69PepyhrkJ98qjzykg'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
