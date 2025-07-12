 class EventBus extends HTMLElement {
  constructor() {
    super();
  }

  _activeMarbleData;
  _activeMarble;
  _gamedata;

  get activeMarble() {
    const mc = this._activeMarbleData.color
    const mn = this._activeMarbleData.marbleNum
    return document.querySelector(`wahoo-board-marble[marble-color="${mc}"][marble-number="${mn}"]`)
  }

  get activeMarbleData() {
    return this._activeMarbleData;
  }

  set activeMarbleData(value) {
    this._activeMarbleData = value
  }

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