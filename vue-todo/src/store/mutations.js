// mutations 메소드의 첫번째 매개변수는 state 객체
// 두번째 매개변수는 컴포넌트에서 commit으로 넘긴 인자값(2개 이상의 인자값을 넘겨야 할 경우엔 객체로 만들어 넘김)
const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem};
  localStorage.setItem(obj.item, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

const showAllUsers = (state, payload) => {
  state.users = payload.data;
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems, showAllUsers }
