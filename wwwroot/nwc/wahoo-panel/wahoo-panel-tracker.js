 class WahooPanelTracker extends HTMLElement {
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

  endTurn() {
    //this.addEventListener('send_end_turn_evt', () => { this.initTurn(); })
    console.log('endTurn click')
  }

  eventHandler(e) {
    console.log('e: ', e)

    if (e.type === 'send_new_turn_event') {
      //this.querySelector('.tracker-message').textContent = `${e.detail}'s move`
      const titleEle = this.querySelector('.tracker-title')
      titleEle.textContent = `Turn Tracker - ${e.detail}`
      titleEle.setAttribute('bg', e.detail)
    }
  }

  render() {
    this.innerHTML = `
      <style>
        wahoo-panel-tracker {
          width: 100%;
        }
        #wahoo-panel-tracker {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }
        #wahoo-panel-tracker div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #wahoo-panel-tracker .tracker-title {
          height: 40px;
          text-transform: capitalize;
        }
        #wahoo-panel-tracker .tracker-btn-container {
          height: 80%;
        }
        #wahoo-panel-tracker .tracker-message {
          color: white;
          padding: 12px;
          font-size: 14px;
          text-transform: capitalize;
        }
        #wahoo-panel-tracker .tracker-btn {
          background: dodgerblue;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          padding: 12px;
          font-size: 14px;
        }
      </style>
      <div id="wahoo-panel-tracker">
        <div class="tracker-title">Turn Tracker</div>
        <div class="tracker-btn-container">
          <div class="tracker-message"></div>
          <div class="tracker-btn">End Turn</div>
        </div>
      </div>
    `
    this.addEventListener('click', () => { this.endTurn(); })
    this.eventBus.addEventListener('send_new_turn_event', (e) => { this.eventHandler(e); })
  }
}
customElements.define("wahoo-panel-tracker", WahooPanelTracker);