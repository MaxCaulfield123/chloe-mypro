import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartdata:[]
  },
  mutations: {
    pushdata(state,i){
      state.cartdata.push(i)
    },
    deldata(state,i){
      state.cartdata.splice(i,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
