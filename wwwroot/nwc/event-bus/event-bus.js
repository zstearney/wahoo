 class EventBus extends HTMLElement {
  constructor() {
    super();
  }

  _gamedata = null;

  get gamedata() {
    return this._gamedata
  }

  set gamedata(value) {
    this._gamedata = value
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  render() {
    this.setAttribute('id', 'event-bus')
    this.setAttribute('hidden', '')
  }
}
customElements.define("event-bus", EventBus);