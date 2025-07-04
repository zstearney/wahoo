 class MainSite extends HTMLElement {
  constructor() {
    super();
  }

    get eventBus() {
    return document.querySelector('#event-bus')
  }

  connectedCallback() {
    this.render()
    this.addListeners(this.eventBus)
  }

  disconnectedCallback() {
  }

  addListeners(bus) {
    bus.addEventListener('send_start_game_event', ({detail}) => { this.startgame(detail) })
  }

  render() {
    this.innerHTML = `
      <style>
        #site {
          height: 100%;
          width: 100%;
        }
        #site section {
          position: absolute;
          right: 0;
          left: 0;
        }
        #site .site-title {
          height: 30px;
          top: 0;
        }
        #site .site-content {
          background: #24252a;
          padding: 18px;
          top: 30px;
          bottom: 80px;
          overflow: hidden;
        }
        #site .site-footer {
          background-color: #24252a;
          height: 80px;
          bottom: 0px;
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
      <div id="event-bus" hidden></div>
      <div id="site">
        <section class="site-title">
          <div><span>Wahoo - The Board Game</span></div>
        </section>
        <section class="site-content">
          <div><main-menu></main-menu></div>
        </section>
        <section class="site-footer"></section>
      </div>
    `
    //document.addEventListener('DOMContentLoaded', () => { this.updateApp() })
  }

  startgame(data) {
    const wahooGame = document.createElement('wahoo-game')
    const mainMenu = this.querySelector('section.site-content div')
    const siteContent = this.querySelector('section.site-content')
    mainMenu.remove()
    siteContent.appendChild(wahooGame)
  }
}
customElements.define("main-site", MainSite);