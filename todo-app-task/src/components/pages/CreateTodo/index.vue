<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="openForm" v-show="!wasCreated">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="wasCreated">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="titleText" type="text">
          </div>
          <div class="field">
            <label>Project</label>
            <input v-model="projectText" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="submitForm()">Add</button>
            <button class="ui basic red button" v-on:click="closeForm()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CreateTodo.js" />
