 import { GameLogic } from "../game-logic/game-logic.js";
 
 class WahooGame extends HTMLElement {
  constructor() {
    super();
  }

  _GameLogic;

  get eventBus() {
    return document.querySelector('#event-bus')
  }

  connectedCallback() {
    this.render()
    this._GameLogic = new GameLogic()
    setTimeout(() => { this.initGame() })
  }

  disconnectedCallback() {
  }

  initGame() {
    console.log('initGame: ')
    this._GameLogic.initGameTurn()
    const activeTurn = this._GameLogic.activeTurn
    //console.log('activeTurn: ', activeTurn)
    this.eventBus.dispatchEvent(new CustomEvent("send_new_turn_event", { detail: activeTurn } ));
  }

  render() {
    this.innerHTML = `
      <style>
        #wahoo-game {
          height: 100%;
          width: 100%;
        }
        #wahoo-game wahoo-board {
          height: 100%;
          width: 100%;
          padding-bottom: 18px;
        }
        #wahoo-game wahoo-panel {
          height: 100%;
          width: 340px;
        }
        wahoo-game[turn="blue"] :not(wahoo-board-marble[color="blue"]) {
          pointer-events: none;
          user-select: none;
        }
      </style>
      <div id="wahoo-game" class="row">
        <wahoo-board></wahoo-board>
        <wahoo-panel></wahoo-panel>
      </div>
    `
    
    //this.addEventListener('send_new_turn_event', () => { this.initTurn(); })
    //this.addEventListener('DOMContentLoaded', () => { this.initGame() })
    window.addEventListener('resize', () => { this.updateGameComponentsSize() })
    this.updateGameComponentsSize()
  }

  updateGameComponentsSize() {
    const game = this.querySelector('#wahoo-game')
    const board = this.querySelector('wahoo-board')
    //const panel = this.querySelector('wahoo-panel')

    //const gheight = game.offsetHeight
    const bheight = board.offsetHeight
    const bwidth = board.offsetWidth;

    //board.style.height = `${bheight}px`;

    if (bheight > bwidth) {
        //board.style.height = `${bwidth}px`;
        //board.style.width = `${bwidth}px`;
    } else {
        //board.style.height = `${bheight}px`;
        //board.style.width = `${bheight}px`;
    }


    // const board = this.querySelector('wahoo-board')
    // const bwidth = board.offsetWidth;
    // const bheight = board.offsetHeight;
    // let bSize = 0

    // console.log('bwidth: ', bwidth)
    // console.log('bheight: ', bheight)

    // if (bheight > bwidth) {
    //     board.style.height = `${bwidth}px`;
    //     board.style.width = `${bwidth}px`;
    //     bSize = bwidth
    // } else {
    //     board.style.height = `${bheight}px`;
    //     board.style.width = `${bheight}px`;
    //     bSize = bheight
    // }

    // console.log('bSize: ', bSize)

    // const game = this.querySelector('#wahoo-game')
    // const panel = this.querySelector('wahoo-panel')

    // const pWidth = game.offsetWidth - bSize
    //panel.style.width = `${pWidth}px`    
  }
  
}
customElements.define("wahoo-game", WahooGame);