 class WahooPanelTracker extends HTMLElement {
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
        wahoo-panel-tracker {
          height: 100%;
          width: 100%;
        }
        #wahoo-panel-tracker {
          background: black;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #wahoo-panel-tracker div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #wahoo-panel-tracker .tracker-title {
          color: #938bff;
          height: 20%;
        }
        #wahoo-panel-tracker .tracker-message {
          color: white;
          height: 80%;
        }
      </style>
      <div id="wahoo-panel-tracker">
        <div class="tracker-title">Turn Tracker</div>
        <div class="tracker-message">Blue's turn</div>
      </div>
    `
  }
}
customElements.define("wahoo-panel-tracker", WahooPanelTracker);