<template>
  <div class="ui centered card">
    <div class="content" v-show="!isEditable">
      <div class="header">{{ todo.title }}</div>
      <div class="meta">{{ todo.project }}</div>
      <div class="extra content">
        <span class="right floated edit icon" v-on:click="openForm">
          <i class="edit icon"></i>
        </span>
        <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
          <i class="trash icon"></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditable">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="todo.title">
        </div>
        <div class="field">
          <label>Project</label>
          <input type="text" v-model="todo.project">
        </div>
        <div class="ui two button attached buttons">
          <button class="ui basic blue button" v-on:click="closeForm">Close X</button>
        </div>
      </div>
    </div>
    <div
      class="ui bottom attached green basic button"
      v-show="!isEditable && todo.completed"
      disabled
    >Completed</div>
    <div
      class="ui bottom attached red basic button"
      v-on:click="completeTodo(todo)"
      v-show="!isEditable && !todo.completed"
    >Pending</div>
  </div>
</template>

<script src="./Todo.js"/>
