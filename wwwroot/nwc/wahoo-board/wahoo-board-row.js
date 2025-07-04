 class WahooBoardRow extends HTMLElement {
  constructor() {
    super();
  }

  get rowNumber() {
    return this.getAttribute('row-num')
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  render() {
    this.innerHTML = `
      <style>
        wahoo-board-row {
          height: 100%;
          width: 100%;
        }
        #wahoo-board-row {
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="wahoo-board-row" class="row">
        <wahoo-board-cell rn="${this.rowNumber}" cn="1"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="2"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="3"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="4"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="5"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="6"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="7"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="8"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="9"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="10"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="11"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="12"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="13"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="14"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="15"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="16"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="17"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="18"></wahoo-board-cell>
        <wahoo-board-cell rn="${this.rowNumber}" cn="19"></wahoo-board-cell>
      </div>
    `
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }
}
customElements.define("wahoo-board-row", WahooBoardRow);