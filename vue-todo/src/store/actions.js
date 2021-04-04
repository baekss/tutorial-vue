export const fetchAllUsers = (context) => { // actions 메소드는 비동기 로직을 담당하며 첫번째 매개변수 context를 통해 state 속성, mutations 메소드 모두 접근 가능
	axios.get('https://jsonplaceholder.typicode.com/users')
	.then(response => context.commit('showAllUsers', response));
	//.then(response => context.state.users = response.data);
}
