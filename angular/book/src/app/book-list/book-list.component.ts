import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  searchTerm = '';
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.books$.subscribe(books => {
      this.books = books
    })

  }

  onSearch() {
    this.books = this.bookService.filterByAuthor(this.searchTerm);
  }

  clearSearch() {
    this.bookService.loadBooks()
    this.searchTerm = ''
  }



}
