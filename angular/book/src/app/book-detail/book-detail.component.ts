import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book!: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.book = this.bookService.findBookById(+params['bookId'])
    })
  }

  onDestroy() {
    this.bookService.deleteById(this.book.id);
    this.router.navigate(['/books'])
  }

}
