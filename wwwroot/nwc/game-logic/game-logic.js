 class GameLogic {
  constructor() {}

  _turnEnum = { 0: 'blue', 1: 'red', 2: 'green', 3: 'yellow' }
  _activeTurn;

  get activeMarble() { }

  initGameTurn() {
    const min = 0
    const max = 3
    const selectedColor = Math.floor(Math.random() * (max - min + 1) + min)
    
  }
}