import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, interval, map, Subject, timeout } from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookCache: Book[] = [];

  books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  filteredAuthor = ''

  constructor() {
    setTimeout(() => {
      this.loadBooks()
    }, 1000)
  }

  loadBooks() {
    this.books$.next([{
      id: 1,
      title: "Hamster'z life",
      author: 'Joe',
      imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg',
      description: "Wow a nice game"
    }, {
      id: 2,
      title: "Hammies in Da Hood",
      author: 'Steve',
      imageUrl: 'https://ih1.redbubble.net/image.2340762387.3371/st,small,507x507-pad,600x600,f8f8f8.jpg',
      description: 'Hamsters find themselves in the middle of a gang war'

    }])

    this.bookCache = this.books$.getValue();
  }
  filterByAuthor(searchterm: string) {
    if (!searchterm) {
      this.books$.next(this.bookCache)
    } else {
      const filteredBooks = this.bookCache.filter(book =>
        book.author.toUpperCase().includes(searchterm.toUpperCase().trim()) ||
        book.title.toUpperCase().includes(searchterm.toUpperCase().trim())
      )

      this.books$.next(filteredBooks)
    }
  }

  addBook(newBook: Book) {
    newBook.id = this.books$.getValue().length + 1
    this.books$.next([...this.books$.getValue(), newBook])
  }


  findBookById(id: number) {
    const book = this.books$.getValue().find(b => b.id === id)
    if (!book) {
      throw new Error('Book not found')
    }
    return book
  }

  deleteById(id: number) {
    this.books$.next(this.books$.getValue().filter(b => b.id !== id))
  }
}
