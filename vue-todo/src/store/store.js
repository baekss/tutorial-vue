import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    todoItems: storage.fetch(),
    users: []
  },
  mutations: {
    // mutations 메소드의 첫번째 매개변수는 state 객체
    // 두번째 매개변수는 컴포넌트에서 commit으로 넘긴 인자값(2개 이상의 인자값을 넘겨야 할 경우엔 객체로 만들어 넘김)
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(obj.item, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
    showAllUsers(state, payload) {
      state.users = payload.data;
    }
  },
  actions: {
    fetchAllUsers(context) { // actions 메소드는 비동기 로직을 담당하며 첫번째 매개변수 context를 통해 state 속성, mutations 메소드 모두 접근 가능
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => context.commit('showAllUsers', response));
      //.then(response => context.state.users = response.data);
    }
  }
});
// Vuex vs Vue
// state : data
// getters : computed
// mutations : methods
// actions : async methods
