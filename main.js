let app = new Vue({
  el: '#app',
  data: {
    text: '',
    createMode: false,
    todos: []
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        text: this.text,
        done: false,
        edit: false
      })
      this.text = ''
      this.createMode = false
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },
    editTodo: function (index) {
      this.todos[index].edit = true
    },
    saveTodo: function (index, text) {
      this.todos[index].text = text
      this.todos[index].edit = false
    },
    doCheck: function (index) {
      this.todos[index].done = true
    },
    createNew: function () {
      this.createMode = true
    }
  }
})
