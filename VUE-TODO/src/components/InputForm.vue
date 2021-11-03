<template>
  <div class="form">
    <h1>VUE TODO APP</h1>
    <input @keyup.enter="addTodo" type="text" placeholder="Add New Todos" v-model="inputValue" />
    <button @click="addTodo" class="add-btn" :disabled="!inputValue.length"><font-awesome-icon icon="plus" /></button>
    <Todos :todos="todos"/>
    <span>Made with ❤️ by Marynoir</span>
  </div>
</template>

<script>
import Todos from './Todos.vue'
export default {
  name: "InputForm",
  components:{
      Todos
  },
  data() {
    return {
      inputValue: "",
      todos: [],
      isActive: true,
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.inputValue);
      this.inputValue = ""
    },
  },
};
</script>

<style>
.form{
    background: #fff;
    padding:30px 40px;
    color: black;
    max-width: 780px;
}
.form input{
    padding: 10px;
    width: 70%;
    margin: 20px 0;
}
.add-btn{
    padding: 12px;
    background: rgb(1, 106, 124);
    border: none;
    width: 80px;
    color: #fff;
    margin-left: 5px;
}
.add-btn:disabled {
  background: #ccc;
}
.add-btn:disabled:hover {
  background: #ccc;
}
.add-btn:hover{
  background: rgb(0, 208, 245);
}
</style>