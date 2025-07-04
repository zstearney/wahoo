 class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
  }

  get background() {
    return this.getAttribute('background') ?? 'dodgerblue'
  }

  get color() {
    return this.getAttribute('color') ?? 'white'
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

   get fontsize() {
    return this.getAttribute('fontsize') ?? '12px'
  }

  get px() {
    return this.getAttribute('px') ?? '12px'
  }

  get py() {
    return this.getAttribute('py') ?? '4px'
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .my-button {
            
        }
        .my-button .my-button-container {
            align-items: center;
            background-color: ${this.background};
            color: ${this.color};
            cursor: pointer;
            display:flex;
            transition: 0.24s;
        }
        .my-button .my-button-container {
            align-items: center;
            background-color: ${this.background};
            border-radius: 5px;
            color: ${this.color};
            cursor: pointer;
            display:flex;
            transition: 0.24s;
        }
        .my-button .my-button-container[disabled] {
            background-color: grey;
            color: white;
            user-select: none;
        }
        .my-button span {
            padding: ${this.py} ${this.px};
            font-size: ${this.fontsize}
        }
      </style>
      <div class="my-button">
        <div class="my-button-container" ${this.disabled ? 'disabled' : ''}>
            <span>
                <slot></slot>
            </span>
        </div>
      </div>
    `
  }
}
customElements.define("my-button", MyButton);