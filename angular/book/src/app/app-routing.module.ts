import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'book/:bookId', component: BookDetailComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: '',redirectTo: 'books', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
