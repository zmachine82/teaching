const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.new-todo input')
const addTodoButton = document.querySelector('.new-todo button')

let todos = loadFromStorage().filter(x => x.text)

window.onload = createTodoList

addTodoButton.addEventListener('click', () => {
    if(todoInput.value) {
        const todo = {
            text: todoInput.value,
            completed: false
        }
        todoList.appendChild(createTodoElement(todo))
        todos.push(todo)
        saveToStorage()
    }
})


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
        saveToStorage()
    })
    todo.element.addEventListener('dblclick', () => {
        removeTodo(todo)
    })
}

function removeTodo(todo) {
    todos = todos.filter(x => x !== todo)
    todo.element.remove()
    saveToStorage()
}


function loadFromStorage() {
    const data = localStorage.getItem('todos') || '[]'
    return JSON.parse(data) 
}

function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))
}