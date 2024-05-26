export default {
  name: 'CreateTodo',
  data() {
    return {
      titleText: '',
      projectText: '',
      wasCreated: false,
    };
  },
  methods: {
    openForm() {
      this.wasCreated = true;
    },
    closeForm() {
      this.wasCreated = false;
    },
    submitForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;

        this.$emit('create-todo', {
          title,
          project,
          completed: false,
        });
        this.titleText = '';
        this.projectText = '';
        this.wasCreated = false;
      }
    },
  },
};
