let app = new Vue({
  el: '#app',
  data: {
    maxId: null,
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
      this.maxId = this.todos.reduce((a, b) => {
        return a > b.id ? a : b.id
      }, 0)
      this.todos.push({
        id: this.maxId + 1,
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
    onEditTodo: function (index) {
      this.todos[index].edit = true
    },
    offEditTodo: function (index) {
      this.text =''
      this.todos[index].edit = false
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
    },
    removeTargetId: function(index) {
      return this.todos[index].id + 'remove'
    },
    updateTargetId: function (index) {
      return this.todos[index].id + 'update'
    },
    doneTargetId: function (index) {
      return this.todos[index].id + 'done'
    }
  }
})
