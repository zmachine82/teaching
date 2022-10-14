import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, interval, map, Subject, timeout } from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  filteredAuthor = ''

  constructor() {
    setTimeout(() => {
      this.loadBooks()
    }, 3000)
  }

  loadBooks() {
    this.books$.next([  {
      id: 1,
      title: "Hamster'z life",
      author: 'Joe',
      imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg',
      description: "wow a nice game"
    },   {
      id: 2,
      title: "Hamster'z life 2",
      author: 'Steve',
      imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg',
      description: 'another nice game'
    }])
  }
  filterByAuthor(author: string) {
    return this.books$.getValue().filter(book => book.author === author)
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
