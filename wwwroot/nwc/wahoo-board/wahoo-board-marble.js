 class WahooBoardMarble extends HTMLElement {
  constructor() {
    super();
  }

  get marbleColor() {
    return this.getAttribute('marble-color')
  }

  get marbleNumber() {
    return this.getAttribute('marble-number')
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  render() {
    this.innerHTML = `
      <style>
        wahoo-board-marble {
          cursor: pointer;
          pointer-events: all;
          user-select: all;
          height: 100%;
          width: 100%;
        }
        #wahoo-board-marble {
          border-radius: 50%;
          height: 100%;
          width: 100%;
        }
        #wahoo-board-marble[color="blue"] {
          background: #589eff;
        }
        #wahoo-board-marble[color="red"] {
          background: #ff6e76;
        }
        #wahoo-board-marble[color="green"] {
          background: #00c8a1;
        }
        #wahoo-board-marble[color="yellow"] {
          background: #d69605;
        }
      </style>
      <div id="wahoo-board-marble" class="board-marble" color="${this.marbleColor}"></div>
    `
    //this.querySelector('#wahoo-board-marble').addEventListener("ondragstart", () => { console.log('test'); })
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }
}
customElements.define("wahoo-board-marble", WahooBoardMarble);