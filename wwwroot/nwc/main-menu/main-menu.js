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

  eventHandler(e) {
    console.log('e: ', e)
    this.querySelector('.name-input-counter').textContent = e.value.length
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
        #main-menu .menu-input-section {
          border-image: linear-gradient(to right, #11998e, #38ef7d);
          border-image-slice: 1;
          border-style: solid;
          border-width: 2px;
          padding: 8px;
          margin-bottom: 36px;
          width: 100%;
        }
        #main-menu .menu-input-label {
          display: flex;
          padding-bottom: 8px;
          width: 100%;
        }
        #main-menu .menu-input-label div {
          color: #938bff;
          border-radius: 9px;
        }
        #main-menu .menu-input-row {
          display: flex;
          width: 100%;
        }
        #main-menu .menu-input-row > * {
          cursor: pointer;
          width: 12.5%;
        }
        #main-menu .name-select {
          display: flex;
          align-items: end;
        }
        #main-menu .name-select input {
          border: 0;
          border-bottom: 1px solid white;
          outline: 0;
          color: white;
          padding: 7px 0;
          background: transparent;
          transition: border-color 0.2s;
          margin-right: 8px;
          width: 120px;
        }
        #main-menu .name-select input:focus {
          border-bottom: 1px solid #938bff;
        }
        #main-menu .name-select label {
          font-size: 12px;
        }
        #main-menu input[type="radio"] {
          filter: hue-rotate(105deg);
        }
        #main-menu #blue-color-input {
          filter: hue-rotate(83deg);
        }
        #main-menu #red-color-input {
          filter: hue-rotate(210deg);
        }
        #main-menu #green-color-input {
          filter: hue-rotate(20deg);
        }
        #main-menu #yellow-color-input {
          filter: hue-rotate(265deg);
        }
        #main-menu .input-label {
          color: white;
        }
      </style>
      <div id="main-menu">
        <div class="main-menu-wrapper">
          <section class="menu-input-section">
            <div class="menu-input-label">
              <div>Player Name</div>
            </div>
            <div class="menu-input-row name-select">
              <input type="text" id="player-name-input" name="name-input" maxlength="16" placeholder="Name" required />
              <label class="input-label" for="1-player-input"><span class="name-input-counter">0</span>/16</label>
            </div>
          </section>
          <section class="menu-input-section">
            <div class="menu-input-label">
              <div>Player Number</div>
            </div>
            <div class="menu-input-row player-select">
              <input type="radio" id="1-player-input" name="player-select-input" value="1" checked>
              <label class="input-label" for="1-player-input">1</label>
    
              <input type="radio" id="2-player-input" name="player-select-input" value="2">
              <label class="input-label" for="2-player-input">2</label>
    
              <input type="radio" id="3-player-input" name="player-select-input" value="3">
              <label class="input-label" for="3-player-input">3</label>
    
              <input type="radio" id="4-player-input" name="player-select-input" value="4">
              <label class="input-label" for="4-player-input">4</label>
            </div>
          </section>
          <section class="menu-input-section">
            <div class="menu-input-label">
              <div>Marble Color</div>
            </div>
            <div class="menu-input-row color-select">
              <input type="radio" id="blue-color-input" name="color-select-input" value="blue" checked>
              <label class="input-label" for="blue-color-input">Blue</label>

              <input type="radio" id="red-color-input" name="color-select-input" value="red">
              <label class="input-label" for="red-color-input">Red</label>

              <input type="radio" id="green-color-input" name="color-select-input" value="green">
              <label class="input-label" for="green-color-input">Green</label>

              <input type="radio" id="yellow-color-input" name="color-select-input" value="yellow">
              <label class="input-label" for="yellow-color-input">Yellow</label>
            </div>
          </section>
          <my-button px="12px" py="12px" fontsize="18px">Start Game</my-button>
        </div>
      </div>
    `
    const playeNameInput = this.querySelector('#player-name-input')
    playeNameInput.addEventListener('input', () => { this.eventHandler(playeNameInput) })
    this.querySelector('my-button').addEventListener('click', () => { this.sendStartGameEvent() })
  }

  sendStartGameEvent() {
    const playerCount = this.querySelector('input[name="player-select-input"]:checked').value
    const playerColor = this.querySelector('input[name="color-select-input"]:checked').value
    let playerName = this.querySelector('input[name="name-input"]').value
    if (!playerName) { playerName = `${playerColor} player` }
    this.eventBus.dispatchEvent(new CustomEvent("send_start_game_event", { detail: { playerName: playerName, playerCount: playerCount, playerColor: playerColor } } ));
  }
}
customElements.define("main-menu", MainMenu);