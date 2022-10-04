



export class GameRules {
  squares: ('X' | 'O' | '')[] = ['', '', '', '', '', '', '', '', '']
  currentPlayer: 'X' | 'O' = 'X'
  isGameOver= false;

  protected winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  playMove(index: number): void {
    if(this.isGameOver) {
      return
    }
    console.log('play move called ' + index)
    if(this.squares[index] === '') {
      this.squares[index] = this.currentPlayer

      const isWinningMove = this.checkForWin()
      console.log(isWinningMove)
      if(isWinningMove) {
        this.isGameOver = true
        return;
      }

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }
  }

  private checkForWin() {

    for(let winCondition of this.winConditions) {
       const doesThisWin = winCondition.every(index => this.squares[index] === this.currentPlayer)
       if(doesThisWin) {
        return true;
       }
    }

    return false;
  }
}

