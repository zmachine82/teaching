import { Component, OnInit } from '@angular/core';
import { StringCalculator } from '../string-calc';

@Component({
  selector: 'app-string-calc',
  templateUrl: './string-calc.component.html',
  styleUrls: ['./string-calc.component.css']
})
export class StringCalcComponent implements OnInit {

  textToAdd = ''
  result?: number;

  constructor(private calc: StringCalculator) { }

  ngOnInit(): void {
  }

  submitTextToCalc() {
    this.result = this.calc.add(this.textToAdd)
  }

}
