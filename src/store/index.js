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
    },
    setFilter (state, filter) {
      state.filter = ['==', 'acq_date', filter]
    }
    /* changeEvents (state, selectedEvents) {
      state.events.selectedEvents = selectedEvents
    },
    changeCharacter (state, selectedEvents) {
      state.charaters.selectedEvents = selectedEvents
    },
    changeThreeLayer (state, visible) {
      state.threelayer.visible = visible
    },
    sendModelCenter (state, center) {
      state.threelayer.center = center
    } */
  }
})

export default store
