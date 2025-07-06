 class MainSite extends HTMLElement {
  constructor() {
    super();
  }

  get eventBus() {
    return document.querySelector('#event-bus')
  }

  connectedCallback() {
    this.render()
    setTimeout(() => { this.addListeners(this.eventBus) })
  }

  disconnectedCallback() {
  }

  addListeners(bus) {
    bus.addEventListener('send_start_game_event', ({detail}) => { 
      this.eventBus.gamedata = detail
      this.startgame() 
    })
  }

  render() {
    this.innerHTML = `
      <style>
        #site {
          height: 100%;
          width: 100%;
        }
        #site .site-section {
          position: absolute;
          right: 0;
          left: 0;
        }
        #site .site-title {
          height: 36px;
          top: 0;
        }
        #site .site-content {
          background: #24252a;
          margin: 0 18px 18px 18px;
          top: 36px;
          bottom: 0;
          overflow: hidden;
        }
        #site .site-title div {
          align-items: center;
          background-color: #24252a;
          color: white;
          display: flex;
          height: 100%;
          font-size: 24px;
          justify-content: center;
        }
      </style>
      <event-bus></event-bus>
      <div id="site">
        <section class="site-title site-section">
          <div><span>Wahoo - The Board Game</span></div>
        </section>
        <section class="site-content site-section">
          <div><main-menu></main-menu></div>
        </section>
      </div>
    `
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }

  startgame() {
    const wahooGame = document.createElement('wahoo-game')
    const mainMenu = this.querySelector('section.site-content div')
    const siteContent = this.querySelector('section.site-content')
    mainMenu.remove()
    siteContent.appendChild(wahooGame)
  }
}
customElements.define("main-site", MainSite);