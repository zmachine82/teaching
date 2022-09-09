const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.new-todo input')
const addTodoButton = document.querySelector('.new-todo button')

let todos = loadFromStorage().filter(x => x.text)

window.onload = createTodoList(todos)

addTodoButton.addEventListener('click', () => {
    if(todoInput.value) {
        const todo = {
            text: todoInput.value,
            completed: false
        }
        todoList.appendChild(createTodoElement(todo))
        todos.push(todo)
        saveToStorage(todos)
        todoInput.value = ''
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

function createTodoList(todosToMake) {
    todosToMake.forEach(todo => {
        todoList.appendChild(createTodoElement(todo))
    })
}

function updateCompleteStatus(todo) {
    todo.completed = !todo.completed
    setTodoClasses(todo)
    sortTodosCompletedLast()
}

function setTodoClasses(todo) {
    todo.completed ? todo.element.classList.add('completed') : todo.element.classList.remove('completed')
}

function addTodoClickListener(todo) {
    todo.element.addEventListener('click', () => {
        updateCompleteStatus(todo)
        saveToStorage(todos)
       
    })
    todo.element.addEventListener('dblclick', () => {
        removeTodo(todo)
    })
}

function removeTodo(todo) {
    todos = todos.filter(x => x !== todo)
    todo.element.remove()
    saveToStorage(todos)
}

function sortTodosCompletedLast() {
    todos.sort((a,b) => a.completed - b.completed)
    todos.forEach(todo => todo.element.remove())
    createTodoList(todos)
    saveToStorage(todos)
}


