function navigate(url) {
    location.href = url
}

class BookList {

    addNewBook(book) {
        const books = this.tryToGetBooks()
        console.log(books)
        books.push(book)
        
        localStorage.setItem('books', JSON.stringify(books))
    }
    
    tryToGetBooks() {
        try {
            return JSON.parse(localStorage.getItem('books')) || []
        } catch(e) {
            console.error('oopsie', e)
            return []
        }
    }
}

class Book {
    title;
    author;
    url;

    constructor(title, author, url) {
        this.title = title
        this.author = author
        this.url = url
    }
}









