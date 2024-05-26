export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      isEditable: false,
    };
  },
  methods: {
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    openForm() {
      this.isEditable = true;
    },
    closeForm() {
      this.isEditable = false;
    },
  },
};