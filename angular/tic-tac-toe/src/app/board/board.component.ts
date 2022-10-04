import { Component, OnInit } from '@angular/core';
import { GameRules } from '../game-rules';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  game: GameRules = new GameRules();

  constructor() { }

  ngOnInit(): void {
  }


}
