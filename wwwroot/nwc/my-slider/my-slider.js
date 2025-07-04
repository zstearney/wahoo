 class MySlider extends HTMLElement {
  constructor() {
    super();
  }

  get label() {
    return this.getAttribute('label') ?? ''
  }

  get length() {
    return this.getAttribute('length') ?? '100px'
  }

  get min() {
    return this.getAttribute('min') ?? '1'
  }

  get max() {
    return this.getAttribute('max') ?? '4'
  }

  get value() {
    return this.getAttribute('value') ?? '2'
  }

  set value(data) {
    this.setAttribute('value', data)
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  eventHandler(e) {
    const inputValue = e.querySelector('input').value
    this.value = inputValue
    this.querySelector('.slider-value').textContent = inputValue
  }

  render() {
    this.innerHTML = `
      <style>
        my-slider {
          width: 100%;
        }
        .my-slider  {
          align-items: center;
          display: flex;
          color: white;
          width: 100%;
        }
        .my-slider .slider {
          appearance: none;
          width: ${this.length};
          height: 25px;
          background: #d3d3d3;
          outline: none; 
          opacity: 0.7;
          transition: opacity .2s;
          -webkit-transition: .2s;
          -webkit-appearance: none;
        }
        .my-slider .slider:hover {
          opacity: 1;
        }
        .my-slider .slider::-webkit-slider-thumb {
          appearance: none;
          width: 25px;
          height: 25px;
          background: #04AA6D;
          cursor: pointer;
          -webkit-appearance: none;
        }
        .my-slider .slider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          background: #04AA6D;
          cursor: pointer;
        }
      </style>
      <div class="my-slider row">
        <div class="slider-label">${this.label}</div>
        <input type="range" class="slider" min="${this.min}" max="${this.max}" value="${this.value}">
        <div class="slider-value">${this.value}</div>
      </div>
    `
    this.querySelector('input').addEventListener('input', () => { this.eventHandler(this) })
  }
}
customElements.define("my-slider", MySlider);