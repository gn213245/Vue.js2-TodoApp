<template>
  <div id="app">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header">Todo List with Vue.js 2</h1>
        <h2 class="ui inverted header">Edward Nguyen
          <div class="sub header">Application Developer</div>
        </h2>
        <h3 class="ui inverted header">Melbourne, AU - 2024</h3>
        <a class="tiny ui linkedin button" type="button" href="https://www.linkedin.com/in/huu-truong-giang-nguyen-776a99267/">
          <i class="linkedin icon"></i>
          LinkedIn
        </a>
      </div>
    </div>
    <br />
    <div class="ui three column centered grid">
      <div class="column">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert';
import TodoList from './components/pages/TodoList/index';
import CreateTodo from './components/pages/CreateTodo/index';

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [
        {
          title: 'Todo A',
          project: 'Project A',
          completed: false,
        },
        {
          title: 'Todo B',
          project: 'Project B',
          completed: true,
        },
        {
          title: 'Todo C',
          project: 'Project C',
          completed: false,
        },
        {
          title: 'Todo D',
          project: 'Project D',
          completed: false,
        },
      ],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetAlert('Success!', 'New Task Added.', 'success');
    },
  },
};
</script>
