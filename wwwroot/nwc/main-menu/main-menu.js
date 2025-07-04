 class MainMenu extends HTMLElement {
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
        #main-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }
        #main-menu .main-menu-wrapper {
          align-items: center;
          background: #424656;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          margin-top: 24px;
          padding: 12px;
          height: 50%;
          width: 50%;
        }
        #main-menu #start-btn span {
          background: dodgerblue;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          padding: 12px;
          font-size: 18px;
        }
      </style>
      <div id="main-menu">
        <div class="main-menu-wrapper">
          <my-slider id="player-count" label="Players:"></my-slider>
          <my-button px="12px" py="12px" fontsize="18px">Start Game</my-button>
        </div>
      </div>
    `
    this.querySelector('my-button').addEventListener('click', () => { this.sendStartGameEvent() })
  }

  sendStartGameEvent() {
    const playerCount = this.querySelector('#player-count').value
    this.eventBus.dispatchEvent(new CustomEvent('send_start_game_event'), { playerCount: playerCount })
  }
}
customElements.define("main-menu", MainMenu);