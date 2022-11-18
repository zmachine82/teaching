import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    return numbers.split(new RegExp(/[;,]/) )
      .map(number => Number.isNaN(Number(number)) ? 0 : Number(number))
      .map(number => {
        if (number < 0) {
          throw new Error('No negatives allowed dummy')
        }
        return number
      })
      .reduce((a, b) => a + b, 0)
  }

}
