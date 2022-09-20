import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'not-vanilla';
  showStuff = true;
  someData: string[] = []

  constructor() {
    setTimeout(() => {
      this.title = 'new data'
      this.showStuff = false
      // this.someData = ['stuff', 'more stuff']
    }, 7000)
  }
}
