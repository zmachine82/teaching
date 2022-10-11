import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [  {
    id: 1,
    title: "Hamster'z life",
    author: 'Joe Hamster',
    imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg',
    description: "wow a nice game"
  },   {
    id: 2,
    title: "Hamster'z life 2",
    author: 'Joe Hamster',
    imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg',
    description: 'another nice game'
  }]

  constructor() { }

  findBookById(id: number) {
    return this.books.find(b => b.id === id)
  }
}
