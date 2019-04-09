
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultname = '美食'
try {
  if (localStorage.name) {
    defaultname = localStorage.name
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    name: defaultname
  },
  actions: {
    changetitle (ctx, name) {
      ctx.commit('Mchangetitle', name)
    }
  },
  mutations: {
    Mchangetitle (state, name) {
      state.name = name
      try {
        localStorage.name = name
      } catch (e) {}
    }
  }
})