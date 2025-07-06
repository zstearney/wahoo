 class WahooBoardCell extends HTMLElement {
  constructor() {
    super();
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

  render() {
    this.innerHTML = `
      <style>
        wahoo-board-cell {
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
        wahoo-board-cell[isPlayable],
        wahoo-board-cell[is-queue] {
            background: #70543c;
        }
        wahoo-board-cell[isPlayable] .cell-circle,
        wahoo-board-cell[is-queue] .cell-circle {
            background: #b58863;
            background: radial-gradient(circle at 28px 19px, #b58863, #5f4735);
            border-radius: 50%;
            height: 70%;
            width: 70%;
        }
        wahoo-board-cell[is-home][color="blue"][coordinate="HB3"] {
            background: linear-gradient(45deg, #70543c, #589eff, #70543c, #70543c);
            background-size: 400% 400%;
            animation: gradient 5s ease infinite;
        }
        wahoo-board-cell[is-home][color="blue"][coordinate="HB2"] {
            background: linear-gradient(45deg, #70543c, #589eff, #70543c, #70543c);
            background-size: 400% 400%;
            animation: gradient 5s ease infinite;
        }
        wahoo-board-cell[is-home][color="blue"][coordinate="HB1"] {
            background: linear-gradient(45deg, #70543c, #589eff, #70543c, #70543c);
            background-size: 400% 400%;
            animation: gradient 5s ease infinite;
        }
        wahoo-board-cell[is-home][color="blue"][coordinate="HB0"] {
            background: linear-gradient(45deg, #70543c, #589eff, #70543c, #70543c);
            background-size: 400% 400%;
            animation: gradient 5s ease infinite;
        }
        wahoo-board-cell[is-home][color="red"]{
            background: rgba(30, 84, 159, 1);
        }
        wahoo-board-cell[is-home][color="green"]{
            background: rgba(30, 84, 159, 1);
        }
        wahoo-board-cell[is-home][color="yellow"]{
            background: rgba(30, 84, 159, 1);
        }
        wahoo-board-cell:not([isPlayable]) .cell-circle:not([is-queue]) .cell-circle {
            display: none;
        }
        wahoo-board-cell {
            border: 1px solid #5f4735;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
        }
        @keyframes gradient {
        	0% {
        		background-position: 0% 50%;
        	}
        	50% {
        		background-position: 100% 50%;
        	}
        	100% {
        		background-position: 0% 50%;
        	}
        }
      </style>
      <div id="wahoo-board-cell">
        <div class="cell-circle"></div>
      </div>
    `
    this.updateCellProps()
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }

  updateCellProps() {
    const rn = this.rowNum
    const cn = this.colNum

    switch (rn) {
        case '1':
            if (cn === '7') { this.setAttribute('coordinate', 'B12'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '8') { this.setAttribute('coordinate', 'B13'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '9') { this.setAttribute('coordinate', 'B14'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'B15'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '11') { this.setAttribute('coordinate', 'B16'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '12') { this.setAttribute('coordinate', 'B17'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'C0'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '2':
            if (cn === '2') { this.setAttribute('coordinate', 'QG0'); this.setAttribute('color', 'green'); this.setAttribute('is-queue', ''); return; }
            if (cn === '18') { this.setAttribute('coordinate', 'QY0');  this.setAttribute('color', 'yellow'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HG0');  this.setAttribute('color', 'green'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'B11'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'C1'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '3':
            if (cn === '3') { this.setAttribute('coordinate', 'QG1'); this.setAttribute('color', 'green'); this.setAttribute('is-queue', ''); return; }
            if (cn === '17') { this.setAttribute('coordinate', 'QY1');  this.setAttribute('color', 'yellow'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HG1');  this.setAttribute('color', 'green'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'B10'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'C2'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '4':
            if (cn === '4') { this.setAttribute('coordinate', 'QG2'); this.setAttribute('color', 'green'); this.setAttribute('is-queue', ''); return; }
            if (cn === '16') { this.setAttribute('coordinate', 'QY2');  this.setAttribute('color', 'yellow'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HG2');  this.setAttribute('color', 'green'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'B9'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'C3'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '5':
            if (cn === '5') { this.setAttribute('coordinate', 'QG3'); this.setAttribute('color', 'green'); this.setAttribute('is-queue', ''); return; }
            if (cn === '15') { this.setAttribute('coordinate', 'QY3');  this.setAttribute('color', 'yellow'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HG3');  this.setAttribute('color', 'green'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'B8'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'C4'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '6':
            if (cn === '7') { this.setAttribute('coordinate', 'B7'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'C5'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '7':
            if (cn === '1') { this.setAttribute('coordinate', 'B0'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '2') { this.setAttribute('coordinate', 'B1'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '3') { this.setAttribute('coordinate', 'B2'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '4') { this.setAttribute('coordinate', 'B3'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '5') { this.setAttribute('coordinate', 'B4'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '6') { this.setAttribute('coordinate', 'B5'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '7') { this.setAttribute('coordinate', 'B6'); this.setAttribute('isPlayable', ''); return; }
            
            if (cn === '13') { this.setAttribute('coordinate', 'C6'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '14') { this.setAttribute('coordinate', 'C7'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '15') { this.setAttribute('coordinate', 'C8'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '16') { this.setAttribute('coordinate', 'C9'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '17') { this.setAttribute('coordinate', 'C10'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '18') { this.setAttribute('coordinate', 'C11'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'C12'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '8':
            if (cn === '1') { this.setAttribute('coordinate', 'A17'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'C13'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '9':
            if (cn === '1') { this.setAttribute('coordinate', 'A16'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'C14'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '10':
            if (cn === '2') { this.setAttribute('coordinate', 'HR0');  this.setAttribute('color', 'red'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '3') { this.setAttribute('coordinate', 'HR1');  this.setAttribute('color', 'red'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '4') { this.setAttribute('coordinate', 'HR2');  this.setAttribute('color', 'red'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '5') { this.setAttribute('coordinate', 'HR3');  this.setAttribute('color', 'red'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '15') { this.setAttribute('coordinate', 'HY3');  this.setAttribute('color', 'yellow'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '16') { this.setAttribute('coordinate', 'HY2');  this.setAttribute('color', 'yellow'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '17') { this.setAttribute('coordinate', 'HY1');  this.setAttribute('color', 'yellow'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            if (cn === '18') { this.setAttribute('coordinate', 'HY0');  this.setAttribute('color', 'yellow'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '1') { this.setAttribute('coordinate', 'A15'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'C15'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'E0'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '11':
            if (cn === '1') { this.setAttribute('coordinate', 'A14'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'C16'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '12':
            if (cn === '1') { this.setAttribute('coordinate', 'A13'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'C17'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '13':
            if (cn === '1') { this.setAttribute('coordinate', 'A12'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '2') { this.setAttribute('coordinate', 'A11'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '3') { this.setAttribute('coordinate', 'A10'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '4') { this.setAttribute('coordinate', 'A9'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '5') { this.setAttribute('coordinate', 'A8'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '6') { this.setAttribute('coordinate', 'A7'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '7') { this.setAttribute('coordinate', 'A6'); this.setAttribute('isPlayable', ''); return; }
            
            if (cn === '13') { this.setAttribute('coordinate', 'D6'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '14') { this.setAttribute('coordinate', 'D5'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '15') { this.setAttribute('coordinate', 'D4'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '16') { this.setAttribute('coordinate', 'D3'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '17') { this.setAttribute('coordinate', 'D2'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '18') { this.setAttribute('coordinate', 'D1'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '19') { this.setAttribute('coordinate', 'D0'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '14':
            if (cn === '7') { this.setAttribute('coordinate', 'A5'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'D7'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '15':
            if (cn === '5') { this.setAttribute('coordinate', 'QR3'); this.setAttribute('color', 'red'); this.setAttribute('is-queue', ''); return; }
            if (cn === '15') { this.setAttribute('coordinate', 'QB3');  this.setAttribute('color', 'blue'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HB3');  this.setAttribute('color', 'blue'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }
            
            if (cn === '7') { this.setAttribute('coordinate', 'A4'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'D8'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '16':
            if (cn === '4') { this.setAttribute('coordinate', 'QR2'); this.setAttribute('color', 'red'); this.setAttribute('is-queue', ''); return; }
            if (cn === '16') { this.setAttribute('coordinate', 'QB2');  this.setAttribute('color', 'blue'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HB2');  this.setAttribute('color', 'blue'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'A3'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'D9'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '17':
            if (cn === '3') { this.setAttribute('coordinate', 'QR1'); this.setAttribute('color', 'red'); this.setAttribute('is-queue', ''); return; }
            if (cn === '17') { this.setAttribute('coordinate', 'QB1');  this.setAttribute('color', 'blue'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HB1');  this.setAttribute('color', 'blue'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'A2'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'D10'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '18':
            if (cn === '2') { this.setAttribute('coordinate', 'QR0'); this.setAttribute('color', 'red'); this.setAttribute('is-queue', ''); return; }
            if (cn === '18') { this.setAttribute('coordinate', 'QB0');  this.setAttribute('color', 'blue'); this.setAttribute('is-queue', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'HB0');  this.setAttribute('color', 'blue'); this.setAttribute('is-home', ''); this.setAttribute('isPlayable', ''); return; }

            if (cn === '7') { this.setAttribute('coordinate', 'A1'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'D11'); this.setAttribute('isPlayable', ''); return; }
            break;
        case '19':
            if (cn === '7') { this.setAttribute('coordinate', 'A0'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '8') { this.setAttribute('coordinate', 'D17'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '9') { this.setAttribute('coordinate', 'D16'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '10') { this.setAttribute('coordinate', 'D15'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '11') { this.setAttribute('coordinate', 'D14'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '12') { this.setAttribute('coordinate', 'D13'); this.setAttribute('isPlayable', ''); return; }
            if (cn === '13') { this.setAttribute('coordinate', 'D12'); this.setAttribute('isPlayable', ''); return; }
            break;
    }
  }
}
customElements.define("wahoo-board-cell", WahooBoardCell);