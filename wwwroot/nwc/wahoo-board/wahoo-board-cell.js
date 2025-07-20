 class WahooBoardCell extends HTMLElement {
  constructor() {
    super();
  }

  get eventBus() {
    return document.querySelector('#event-bus')
  }

  get rowNum() {
    return this.getAttribute('rn')
  }

  get colNum() {
    return this.getAttribute('cn')
  }

  get isPlayable() {
    return this.hasAttribute('is-playable')
  }

  get isHome() {
    return this.hasAttribute('is-home')
  }

  get isQueue() {
    return this.hasAttribute('is-queue')
  }

  get color() {
    return this.getAttribute('color')
  }

  get coordinate() {
    return this.getAttribute('coordinate') ?? ''
  }


  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  dragHandler(e) {
    //console.log('e: ', e)
    switch (e.type) {
      case 'dragstart': 
        console.log('ondragstart: ', e)
        console.log('ondragstart: ', e.target.getAttribute('marble-color'))
        const marbleData = { color: e.target.getAttribute('marble-color'), marbleNum: e.target.getAttribute('marble-number') };
        this.eventBus.dispatchEvent(new CustomEvent("send_active_marble_data", { detail: marbleData } ));
        //e.dataTransfer.setData("text", e.target.id)
        break;
      case 'dragenter':
        e.preventDefault();
        this.setAttribute('drag-hover', '')
        break;
      case 'dragover':
        e.preventDefault();
        break;
      case 'dragleave':
        this.removeAttribute('drag-hover')
        break;
      case 'drop':
        e.preventDefault();
        console.log('drop: ', e)
        const dropMarble = this.eventBus.activeMarble
        e.target.querySelector('.cell-circle').appendChild(dropMarble)
        this.removeAttribute('drag-hover')
        //this.eventBus.dispatchEvent(new CustomEvent("send_new_turn_event"));
        break;
    }
  }

  render() {
    this.innerHTML = `
      <style>
        wahoo-board-cell {
            align-items: center;
            border: 1px solid #5f4735;
            display: flex;
            justify-content: center;
            pointer-events: all;
            user-select: all;
            height: 100%;
            width: 100%;
        }
        #wahoo-board-cell {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }
        wahoo-board-cell[isPlayable], wahoo-board-cell[is-queue] {
            background: #70543c;
        }
        wahoo-board-cell[isPlayable][drag-hover] {
            background: #938bff;
        }
        wahoo-board-cell[is-home][color="blue"] {
            background: #589eff;
        }
        wahoo-board-cell[is-home][color="red"] {
            background: #ff6e76;
        }
        wahoo-board-cell[is-home][color="green"] {
            background: #00c8a1;
        }
        wahoo-board-cell[is-home][color="yellow"] {
            background: #d69605;
        }
        wahoo-board-cell .cell-circle {
            transform: translate(0, 0);
        }
        wahoo-board-cell[isPlayable] .cell-circle, wahoo-board-cell[is-queue] .cell-circle {
            background: #b58863;
            background: radial-gradient(circle at 28px 19px, #b58863, #5f4735);
            border-radius: 50%;
            height: 70%;
            width: 70%;
        }
        wahoo-board-cell:not([isPlayable]) .cell-circle:not([is-queue]) .cell-circle {
            display: none;
        }
        wahoo-board-marble {
            cursor: pointer;
        }    
      </style>
      <div id="wahoo-board-cell" class="no-interact">
        <div class="cell-circle"></div>
      </div>
    `
    this.updateCellProps()
  }

  initMarble(color, number) {
    const marble = document.createElement('wahoo-board-marble')

    marble.setAttribute('marble-color', `${color}`)
    marble.setAttribute('marble-number', `${number}`)
    marble.setAttribute('draggable', 'true')

    marble.addEventListener("dragstart", (event) => { console.log('start'); this.dragHandler(event) })

    this.querySelector('.cell-circle').appendChild(marble);
  }

  updateCellAttr(coordinate, isPlayable=false, isQueue=false, isHome=false, color=null, marbleIndex=null) {
    this.setAttribute('coordinate', `${coordinate}`)

    if (isPlayable) { 
      this.setAttribute('isPlayable', '')

      this.addEventListener("dragenter", (event) => { this.dragHandler(event) })
      this.addEventListener("dragover", (event) => { this.dragHandler(event) })
      this.addEventListener("dragleave", (event) => { this.dragHandler(event) })
      this.addEventListener("drop", (event) => { this.dragHandler(event) })
    }
    if (isHome) { this.setAttribute('is-home', '') }
    if (color) { this.setAttribute('color', '') }
    if (isQueue) { 
      this.setAttribute('is-queue', '') 
      this.initMarble(`${color}`, `${marbleIndex}`); 
    }
  }

  updateCellProps() {
    const rn = this.rowNum
    const cn = this.colNum

    switch (rn) {
        case '1':
            if (cn === '7') { this.updateCellAttr('B12', true); return; }
            if (cn === '8') { this.updateCellAttr('B13', true); return; }
            if (cn === '9') { this.updateCellAttr('B14', true); return; }
            if (cn === '10') { this.updateCellAttr('B15', true); return; }
            if (cn === '11') { this.updateCellAttr('B16', true); return; }
            if (cn === '12') { this.updateCellAttr('B17', true); return; }
            if (cn === '13') { this.updateCellAttr('C0', true); return; }
            break;
        case '2':
            if (cn === '2') { this.updateCellAttr('QG0', false, true, false, 'green', 0); }
            if (cn === '18') { this.updateCellAttr('QY0', false, true, false, 'yellow', 0); return; }
            if (cn === '10') { this.updateCellAttr('HG0', true, false, true, 'green'); return; }

            if (cn === '7') { this.updateCellAttr('B11', true); return; }
            if (cn === '13') { this.updateCellAttr('C1', true); return; }
            break;
        case '3':
            if (cn === '3') { this.updateCellAttr('QG1', false, true, false, 'green', 1); return; }
            if (cn === '17') { this.updateCellAttr('QY1', false, true, false, 'yellow', 1); return; }
            if (cn === '10') { this.updateCellAttr('HG1', true, false, true, 'green'); return; }

            if (cn === '7') { this.updateCellAttr('B10', true); return; }
            if (cn === '13') { this.updateCellAttr('C2', true); return; }
            break;
        case '4':
            if (cn === '4') { this.updateCellAttr('QG2', false, true, false, 'green', 2); return; }
            if (cn === '16') { this.updateCellAttr('QY2', false, true, false, 'yellow', 2); return; }
            if (cn === '10') { this.updateCellAttr('HG2', true, false, true, 'green'); return; }

            if (cn === '7') { this.updateCellAttr('B9', true); return; }
            if (cn === '13') { this.updateCellAttr('C3', true); return; }
            break;
        case '5':
            if (cn === '5') { this.updateCellAttr('QG3', false, true, false, 'green', 3); return; }
            if (cn === '15') { this.updateCellAttr('QY3', false, true, false, 'yellow', 3); return; }
            if (cn === '10') { this.updateCellAttr('HG3', true, false, true, 'green'); return; }

            if (cn === '7') { this.updateCellAttr('B8', true); return; }
            if (cn === '13') { this.updateCellAttr('C4', true); return; }
            break;
        case '6':
            if (cn === '7') { this.updateCellAttr('B7', true); return; }
            if (cn === '13') { this.updateCellAttr('C5', true); return; }
            break;
        case '7':
            if (cn === '1') { this.updateCellAttr('B0', true); return; }
            if (cn === '2') { this.updateCellAttr('B1', true); return; }
            if (cn === '3') { this.updateCellAttr('B2', true); return; }
            if (cn === '4') { this.updateCellAttr('B3', true); return; }
            if (cn === '5') { this.updateCellAttr('B4', true); return; }
            if (cn === '6') { this.updateCellAttr('B5', true); return; }
            if (cn === '7') { this.updateCellAttr('B6', true); return; }
            
            if (cn === '13') { this.updateCellAttr('C6', true); return; }
            if (cn === '14') { this.updateCellAttr('C7', true); return; }
            if (cn === '15') { this.updateCellAttr('C8', true); return; }
            if (cn === '16') { this.updateCellAttr('C9', true); return; }
            if (cn === '17') { this.updateCellAttr('C10', true); return; }
            if (cn === '18') { this.updateCellAttr('C11', true); return; }
            if (cn === '19') { this.updateCellAttr('C12', true); return; }
            break;
        case '8':
            if (cn === '1') { this.updateCellAttr('A17', true); return; }
            if (cn === '19') { this.updateCellAttr('C13', true); return; }
            break;
        case '9':
            if (cn === '1') { this.updateCellAttr('A16', true); return; }
            if (cn === '19') { this.updateCellAttr('C14', true); return; }
            break;
        case '10':
            if (cn === '2') { this.updateCellAttr('HR0', true, false, true, 'red'); return; }
            if (cn === '3') { this.updateCellAttr('HR1', true, false, true, 'red'); return; }
            if (cn === '4') { this.updateCellAttr('HR2', true, false, true, 'red'); return; }
            if (cn === '5') { this.updateCellAttr('HR3', true, false, true, 'red'); return; }
            if (cn === '15') { this.updateCellAttr('HY3', true, false, true, 'yellow'); return; }
            if (cn === '16') { this.updateCellAttr('HY2', true, false, true, 'yellow'); return; }
            if (cn === '17') { this.updateCellAttr('HY1', true, false, true, 'yellow'); return; }
            if (cn === '18') { this.updateCellAttr('HY0', true, false, true, 'yellow'); return; }

            if (cn === '1') { this.updateCellAttr('A15', true); return; }
            if (cn === '19') { this.updateCellAttr('C15', true); return; }
            if (cn === '10') { this.updateCellAttr('E0', true); return; }
            break;
        case '11':
            if (cn === '1') { this.updateCellAttr('A14', true); return; }
            if (cn === '19') { this.updateCellAttr('C16', true); return; }
            break;
        case '12':
            if (cn === '1') { this.updateCellAttr('A13', true); return; }
            if (cn === '19') { this.updateCellAttr('C17', true); return; }
            break;
        case '13':
            if (cn === '1') { this.updateCellAttr('A12', true); return; }
            if (cn === '2') { this.updateCellAttr('A11', true); return; }
            if (cn === '3') { this.updateCellAttr('A10', true); return; }
            if (cn === '4') { this.updateCellAttr('A9', true); return; }
            if (cn === '5') { this.updateCellAttr('A8', true); return; }
            if (cn === '6') { this.updateCellAttr('A7', true); return; }
            if (cn === '7') { this.updateCellAttr('A6', true); return; }
            
            if (cn === '13') { this.updateCellAttr('D6', true); return; }
            if (cn === '14') { this.updateCellAttr('D5', true); return; }
            if (cn === '15') { this.updateCellAttr('D4', true); return; }
            if (cn === '16') { this.updateCellAttr('D3', true); return; }
            if (cn === '17') { this.updateCellAttr('D2', true); return; }
            if (cn === '18') { this.updateCellAttr('D1', true); return; }
            if (cn === '19') { this.updateCellAttr('D0', true); return; }
            break;
        case '14':
            if (cn === '7') { this.updateCellAttr('A5', true); return; }
            if (cn === '13') { this.updateCellAttr('D7', true); return; }
            break;
        case '15':
            if (cn === '5') { this.updateCellAttr('QR3', false, true, false, 'red', 0); return; }
            if (cn === '15') { this.updateCellAttr('QB3', false, true, false, 'blue', 0); return; }
            if (cn === '10') { this.updateCellAttr('HB3', true, false, true, 'blue'); return; }
            
            if (cn === '7') { this.updateCellAttr('A4', true); return; }
            if (cn === '13') { this.updateCellAttr('D8', true); return; }
            break;
        case '16':
            if (cn === '4') { this.updateCellAttr('QR2', false, true, false, 'red', 1); return; }
            if (cn === '16') { this.updateCellAttr('QB2', false, true, false, 'blue', 1); return; }
            if (cn === '10') { this.updateCellAttr('HB2', true, false, true, 'blue'); return; }

            if (cn === '7') { this.updateCellAttr('A3', true); return; }
            if (cn === '13') { this.updateCellAttr('D9', true); return; }
            break;
        case '17':
            if (cn === '3') { this.updateCellAttr('QR1', false, true, false, 'red', 2); return; }
            if (cn === '17') { this.updateCellAttr('QB1', false, true, false, 'blue', 2); return; }
            if (cn === '10') { this.updateCellAttr('HB1', true, false, true, 'blue'); return; }

            if (cn === '7') { this.updateCellAttr('A2', true); return; }
            if (cn === '13') { this.updateCellAttr('D10', true); return; }
            break;
        case '18':
            if (cn === '2') { this.updateCellAttr('QR0', false, true, false, 'red', 3); return; }
            if (cn === '18') { this.updateCellAttr('QB0', false, true, false, 'blue', 3); return; }
            if (cn === '10') { this.updateCellAttr('HB0', true, false, true, 'blue'); return; }

            if (cn === '7') { this.updateCellAttr('A1', true); return; }
            if (cn === '13') { this.updateCellAttr('D11', true); return; }
            break;
        case '19':
            if (cn === '7') { this.updateCellAttr('A0', true); return; }
            if (cn === '8') { this.updateCellAttr('D17', true); return; }
            if (cn === '9') { this.updateCellAttr('D16', true); return; }
            if (cn === '10') { this.updateCellAttr('D15', true); return; }
            if (cn === '11') { this.updateCellAttr('D14', true); return; }
            if (cn === '12') { this.updateCellAttr('D13', true); return; }
            if (cn === '13') { this.updateCellAttr('D12', true); return; }
            break;
    }
  }
}
customElements.define("wahoo-board-cell", WahooBoardCell);