<template>
  <div>
    <p class="tasks">Completed Task(s):
      {{ todos.filter(todo => { return todo.completed === true }).length }}
    </p>
    <p class="tasks">Pending Task(s):
      {{ todos.filter(todo => { return todo.completed === false }).length }}
    </p>
      <todo v-on:delete-todo="deleteTodo(todo)"
            v-on:complete-todo="completeTodo"
            v-for="todo in todos" :todo.sync="todo"
            v-bind:key="todo.value">
      </todo>
  </div>
</template>

<script src="./TodoList.js" />

<style scoped>
p.tasks {
  text-align: center;
}
</style>
