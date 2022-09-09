function loadFromStorage() {
    const data = localStorage.getItem('todos') || '[]'
    return JSON.parse(data) 
}

function saveToStorage(todoList) {
    localStorage.setItem('todos', JSON.stringify(todoList))
}