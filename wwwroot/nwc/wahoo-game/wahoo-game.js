 class WahooGame extends HTMLElement {
  constructor() {
    super();
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
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="wahoo-game">
        <wahoo-board></wahoo-board>
      </div>
    `
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }
}
customElements.define("wahoo-game", WahooGame);