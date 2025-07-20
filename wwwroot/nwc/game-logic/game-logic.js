export class GameLogic {
  constructor() { }

  _turnEnum = { 0: 'blue', 1: 'red', 2: 'green', 3: 'yellow' }
  _activeTurn;

  get activeMarble() { }

  get activeTurn() {
    console.log('_activeTurn: ', this._activeTurn)
    return this._turnEnum[this._activeTurn]
  }

  set activeTurn(d) {
    this._activeTurn = d
  }

  get eventBus() {
    return document.querySelector('#event-bus')
  }

  init() {
    console.log('init called')
    this.initGameTurn()
    console.log('eb: ', this.eventBus)

  }

  initGameTurn() {
    const min = 0
    const max = 3
    const selectedColor = Math.floor(Math.random() * (max - min + 1) + min)
    this.activeTurn = selectedColor
  }
}