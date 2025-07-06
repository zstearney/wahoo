 class WahooGame extends HTMLElement {
  constructor() {
    super();
  }

  get eventBus() {
    return document.querySelector('#event-bus')
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  render() {
    this.innerHTML = `
      <style>
        #wahoo-game {
          display: grid;
          height: 100%;
          width: 100%;
        }
        wahoo-board {
          height: 100%;
          width: 100%;
          padding-bottom: 18px;
        }
        wahoo-panel {
          height: 180px;
          width: 100%;
        }
      </style>
      <div id="wahoo-game">
        <wahoo-board></wahoo-board>
        <wahoo-panel></wahoo-panel>
      </div>
    `
    
    document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
    window.addEventListener('resize', () => { this.updateGameComponentsSize() })
    this.updateGameComponentsSize()
  }

  updateGameComponentsSize() {
    const game = this.querySelector('#wahoo-game')
    const board = this.querySelector('wahoo-board')
    const panel = this.querySelector('wahoo-panel')

    const gheight = game.offsetHeight
    const bheight = gheight - 200
    const bwidth = board.offsetWidth;

    board.style.height = `${bheight}px`;

    if (bheight > bwidth) {
        board.style.height = `${bwidth}px`;
        board.style.width = `${bwidth}px`;
    } else {
        board.style.height = `${bheight}px`;
        board.style.width = `${bheight}px`;
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