import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  formGroup!: FormGroup;
  requiredLength = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, this.validatorButWithExtraSteps()])
    })
  }

  validatorButWithExtraSteps(): ValidatorFn {
    const randomNumber: number = Math.floor(Math.random() * 50);
    this.requiredLength = randomNumber
    return Validators.minLength(this.requiredLength)
  }

  onSubmit() {
    console.log(this.formGroup.value)
    this.bookService.addBook(this.formGroup.value)
  }

}
