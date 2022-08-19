const todoList = document.querySelector('.todo-list')

const todos = [
    {text: 'a nice todo', completed: false},
    {text: 'a completed todo', completed: true}
]

for (const todo of todos) {
    const newElementForTodo = document.createElement('li')
    newElementForTodo.innerText = todo.text
    if (todo.completed) {
        newElementForTodo.classList.add('completed')
    }
    todoList.appendChild(newElementForTodo)
}