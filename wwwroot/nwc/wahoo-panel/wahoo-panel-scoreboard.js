 class WahooPanelScoreboard extends HTMLElement {
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
        wahoo-panel-scoreboard {
          width: 100%;
        }
        #wahoo-panel-scoreboard {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }
        wahoo-panel-scoreboard section {
          background: black;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          height: 100%;
        }
        wahoo-panel-scoreboard .scoreboard-title {
          color: #938bff;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        wahoo-panel-scoreboard .scoreboard-blue {
          color: #589eff;
        }
        wahoo-panel-scoreboard .scoreboard-red {
          color: #ff6e76;
        }
        wahoo-panel-scoreboard .scoreboard-green {
          color: #00c8a1;
        }
        wahoo-panel-scoreboard .scoreboard-yellow {
          color: #d69605;
        }
      </style>
      <div id="wahoo-panel-scoreboard">
        <div class="scoreboard-title">Scoreboard</div>
        <section class="scoreboard-blue">
            <div class="scoreboard-score">0</div>
            <div class="scoreboard-color">Blue</div>
        </section>
        <section class="scoreboard-red">
            <div class="scoreboard-score">0</div>
            <div class="scoreboard-color">Red</div>
        </section>
        <section class="scoreboard-green">
            <div class="scoreboard-score">0</div>
            <div class="scoreboard-color">Green</div>
        </section>
        <section class="scoreboard-yellow">
            <div class="scoreboard-score">0</div>
            <div class="scoreboard-color">Yellow</div>
        </section>
      </div>
    `
  }
}
customElements.define("wahoo-panel-scoreboard", WahooPanelScoreboard);