import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    funName: null,
    filters: null
  },
  mutations: {
    changeFun (state, funName) {
      state.funName = funName
      if (funName === 'timeLine') {
        state.filters = '2019/8/1'
        console.log(state.filters)
      }
    }
  }
})

export default store
