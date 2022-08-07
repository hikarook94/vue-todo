let app = new Vue({
  el: '#app',
  data: {
    text: '',
    createMode: false,
    todos: []
  },
  computed: {
    maxId: function () {
      const ids = this.todos.map(todo => todo.id)
      return this.todos.length ? Math.max(...ids) : 0
    }
  },
  created: function () {
    if (localStorage.length !== 0) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        id: this.maxId + 1,
        text: this.text,
        done: false,
        edit: false
      })
      this.hideCreateMode()
      this.writeStorage()
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
      this.writeStorage()
    },
    doEditTodo: function (index) {
      this.todos[index].edit = true
    },
    canselEditTodo: function (index) {
      this.text =''
      this.todos[index].edit = false
    },
    saveTodo: function (index, text) {
      this.todos[index].text = text
      this.canselEditTodo(index)
      this.writeStorage()
    },
    doCheck: function (index) {
      this.todos[index].done = true
      this.writeStorage()
    },
    showCreateMode: function () {
      this.createMode = true
    },
    hideCreateMode: function () {
      this.text = ''
      this.createMode = false
    },
    writeStorage: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    removeTargetId: function(index) {
      return this.todos[index].id + 'remove'
    },
    updateTargetId: function (index) {
      return this.todos[index].id + 'update'
    },
    doneTargetId: function (index) {
      return this.todos[index].id + 'done'
    },
  }
})
