import sweetAlert from 'sweetalert';
import Todo from '../Todo/index';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      sweetAlert({
        title: 'Are you sure you want to delete this Task?',
        text: 'Attention! This Task will be Deleted!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((deleteTodo) => {
        if (deleteTodo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
          sweetAlert('Deleted!', 'Your Task has been deleted', {
            icon: 'success',
          });
        } else {
          sweetAlert('Cancelled', 'Returning to the Task List', 'error');
        }
        return false;
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].completed = true;
      sweetAlert('Success!', 'Congratulations! Your Task is Complete!', 'success');
    },
  },
};