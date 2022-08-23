const todoList = document.querySelector('.todo-list')

const todos = [
    {text: 'a nice todo', completed: false},
    {text: 'a completed todo', completed: true}
]


window.onload = createTodoList


function createTodoElement(todo) {
    const newElementForTodo = document.createElement('li')
    newElementForTodo.innerText = todo.text
    todo.element = newElementForTodo
    setTodoClasses(todo)
    addTodoClickListener(todo)
    return newElementForTodo
}

function createTodoList() {
    todos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo))
    })
}

function updateCompleteStatus(todo) {
    todo.completed = !todo.completed
    setTodoClasses(todo)
}

function setTodoClasses(todo) {
    if (todo.completed) {
        todo.element.classList.add('completed')
    } else {
        todo.element.classList.remove('completed')
    }
}

function addTodoClickListener(todo) {
    todo.element.addEventListener('click', () => {
        updateCompleteStatus(todo)
    })
}
