import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // global로 사용

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          const value = localStorage.getItem(localStorage.key(i));
          arr.push(JSON.parse(value));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    headerText: 'TODO it!',
    todoItems: storage.fetch()
  }
});
// Vuex vs Vue
// state : data
// getters : computed
// mutations : methods
// actions : async methods
