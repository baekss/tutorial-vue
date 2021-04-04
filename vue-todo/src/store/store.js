import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex); // global로 사용

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});
// Vuex vs Vue
// state : data
// getters : computed
// mutations : methods
// actions : async methods
