 class WahooBoard extends HTMLElement {
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
        #wahoo-board {
          background: #debb8f;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="wahoo-board">
        <wahoo-board-row row-num="1"></wahoo-board-row>
        <wahoo-board-row row-num="2"></wahoo-board-row>
        <wahoo-board-row row-num="3"></wahoo-board-row>
        <wahoo-board-row row-num="4"></wahoo-board-row>
        <wahoo-board-row row-num="5"></wahoo-board-row>
        <wahoo-board-row row-num="6"></wahoo-board-row>
        <wahoo-board-row row-num="7"></wahoo-board-row>
        <wahoo-board-row row-num="8"></wahoo-board-row>
        <wahoo-board-row row-num="9"></wahoo-board-row>
        <wahoo-board-row row-num="10"></wahoo-board-row>
        <wahoo-board-row row-num="11"></wahoo-board-row>
        <wahoo-board-row row-num="12"></wahoo-board-row>
        <wahoo-board-row row-num="13"></wahoo-board-row>
        <wahoo-board-row row-num="14"></wahoo-board-row>
        <wahoo-board-row row-num="15"></wahoo-board-row>
        <wahoo-board-row row-num="16"></wahoo-board-row>
        <wahoo-board-row row-num="17"></wahoo-board-row>
        <wahoo-board-row row-num="18"></wahoo-board-row>
        <wahoo-board-row row-num="19"></wahoo-board-row>
      </div>
    `
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }
}
customElements.define("wahoo-board", WahooBoard);