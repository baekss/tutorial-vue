import axios from 'axios'

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

const state = {
    headerText: 'TODO it!',
    todoItems: storage.fetch(),
    users: []
};

const getters = {
	storedTodoItems(state) {
		return state.todoItems;
	},
	headerText(state) {
		return state.headerText;
	},
	users(state) {
		return state.users;
	}
};

// mutations 메소드의 첫번째 매개변수는 state 객체
// 두번째 매개변수는 컴포넌트에서 commit으로 넘긴 인자값(2개 이상의 인자값을 넘겨야 할 경우엔 객체로 만들어 넘김)
const mutations = {
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
};

const actions = {
	fetchAllUsers(context) { // actions 메소드는 비동기 로직을 담당하며 첫번째 매개변수 context를 통해 state 속성, mutations 메소드 모두 접근 가능
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => context.commit('showAllUsers', response));
		//.then(response => context.state.users = response.data);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
