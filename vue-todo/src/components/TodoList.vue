<template>
  <div>
    <!-- name명(list)은 css의 class속성 prefix(.list-), ul tag로 치환 -->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item" class="shadow">
        <!-- todoItem.completed(boolean) 상태에 의해 checkBtnCompleted class속성 유/무결정 -->
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem', // 암묵적으로 ({todoItem, index}) 인자값을 넘김
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo: function(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete: function(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    // ...mapGetters(['storedTodoItems'])
    // getters의 함수명과 템플릿에 표현할 속성명을 다르게 사용할 때는 객체 리터럴 사용
    ...mapGetters({
      todoItems: 'storedTodoItems'
    })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62ACDE;
  margin-right: 5px;  
}
.checkBtnCompleted {
  color: #B3ADAD;
}
.textCompleted {
  text-decoration: line-through;
  color: #B3ADAD;
}
.removeBtn {
  margin-left: auto;
  color: #DE4343;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
