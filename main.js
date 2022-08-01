let app = new Vue({
  el: '#app',
  data: {
    text: '',
    createMode: false,
    todos: []
  },
  created: function () {
    if (localStorage.length !== 0) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
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
      this.writeStorage()
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
      this.writeStorage()
    },
    editTodo: function (index) {
      this.todos[index].edit = true
    },
    saveTodo: function (index, text) {
      this.todos[index].text = text
      this.todos[index].edit = false
      this.writeStorage()
    },
    doCheck: function (index) {
      this.todos[index].done = true
      this.writeStorage()
    },
    onCreateMode: function () {
      this.createMode = true
    },
    offCreateMode: function () {
      this.text = ''
      this.createMode = false
    },
    writeStorage: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    clearStorage: function () {
      localStorage.clear()
    }
  }
})
