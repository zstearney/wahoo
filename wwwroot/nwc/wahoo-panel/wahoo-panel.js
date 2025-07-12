 class WahooPanel extends HTMLElement {
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
        #wahoo-panel {
          align-items: center;
          background: black;
          height: 100%;
          width: 100%;
        }
        #wahoo-panel .panel-top {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 10%;
        }
        wahoo-panel-tracker, wahoo-panel-dice, wahoo-panel-scoreboard {
          margin: 4px 0;
          display: flex;
          height: 30%;
          width: 100%;
        }
        wahoo-panel-tracker {
          height: 25%;
        }
        wahoo-panel-dice {
          height: 25%;
        }
        wahoo-panel-scoreboard {
          height: 40%;
        }
      </style>
      <div id="wahoo-panel">
        <section class="panel-top ${this.eventBus.gamedata.playerColor}-txt">${this.eventBus.gamedata.playerName} - team ${this.eventBus.gamedata.playerColor}</section>
        <wahoo-panel-tracker></wahoo-panel-tracker>
        <wahoo-panel-dice></wahoo-panel-dice>
        <wahoo-panel-scoreboard></wahoo-panel-scoreboard>
      </div>
    `
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }
}
customElements.define("wahoo-panel", WahooPanel);