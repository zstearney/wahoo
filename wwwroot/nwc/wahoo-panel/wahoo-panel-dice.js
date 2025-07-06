 class WahooPanelDice extends HTMLElement {
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
        wahoo-panel-dice {
          height: 100%;
          width: 100%;
        }
        #wahoo-panel-dice {
          background: black;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #wahoo-panel-dice div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #wahoo-panel-dice .dice-title {
          color: #938bff;
          height: 20%;
        }
        #wahoo-panel-dice .dice {
          height: 80%;
        }
        #wahoo-panel-dice .dice img {
          width: 50px;
        }
        #wahoo-panel-dice .neon-text {
            color: #fff;
            text-shadow: 0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e;
            animation: glow 1.5s infinite alternate;
        }
        @keyframes glow {
            0% { text-shadow: 0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e; }
            100% { text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff, 0 0 160px #00d4ff; }
        }
      </style>
      <div id="wahoo-panel-dice">
        <div class="dice-title">Roll Me</div>
        <div class="dice" ><img src="../../../wwwroot/resources/images/dice_1.svg"></div>
      </div>
    `
  }
}
customElements.define("wahoo-panel-dice", WahooPanelDice);