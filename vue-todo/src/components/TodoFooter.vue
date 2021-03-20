<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    <button class="showAllBtn" v-on:click="showUsers">Show the app's users</button>
    <ul>
      <li v-for="(user) in this.$store.state.users" v-bind:key="user.id">
        <span>{{ user.username }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      this.$store.commit('clearAllItems');
    },
    showUsers: function() {
      this.$store.dispatch('fetchAllUsers');
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn, .showAllBtn {
  color: #E20303;
  display: block;
}
</style>
