import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dad-joke';
  joke: any = {}
  favoriteJokes: any[] = []

  constructor(private http: HttpClient) {
    this.getRandomJoke()
  }

  markJokeAsFavorite() {
    this.favoriteJokes.push(this.joke.id)
    console.log(this.favoriteJokes)
  }

  getRandomJoke() {
    this.http.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}}).subscribe(result => {
      this.joke = result
    })
  }

  getJokeById(id: string) {
    this.http.get('https://icanhazdadjoke.com/j/' + id, {headers: {Accept: 'application/json'}}).subscribe(result => {
      this.joke = result
    })
  }
}
