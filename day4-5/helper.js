function navigate(url) {
    location.href = url
}

function addNewBook(book) {
    const books = tryToGetBooks()
    console.log(books)
    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
}

function tryToGetBooks() {
    try {
        return JSON.parse(localStorage.getItem('books')) || []
    } catch(e) {
        console.error('oopsie', e)
        return []
    }
}










