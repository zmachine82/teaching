import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [  {
    title: "Hamster'z life",
    author: 'Joe Hamster',
    imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg'
  },   {
    title: "Hamster'z life 2",
    author: 'Joe Hamster',
    imageUrl: 'https://i.ibb.co/HB10BnP/51es-Cek-w-ML.jpg'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
