import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全局style 地图样式
    style: 'mapbox://styles/mapbox/dark-v10',
    // 全局pitch 地图倾斜角度
    pitch: '0'
  },
  mutations: {
    // 修改全局style和pitch的值
    changeMapItem (state, value) {
      state.style = value.style
      state.pitch = value.pitch
    }
  },
  actions: {},
  getters: {},
  modules: {}
})
