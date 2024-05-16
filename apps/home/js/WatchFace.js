import { LitElement, html, css } from 'http://shared.localhost/js/vendor/lit/lit-core.js';

class WatchFace extends LitElement {

  static properties = {
    time: {state: true},
  };

  static styles = css`
    span {
      font-size: 32px;
      font-style: italic;
    }
  `;

  constructor() {
    super();
    this.time = new Date();
  }

  render() {
    const { time } = this;
    let hours = time.getHours() + '',
        minutes = time.getMinutes() + '';
    if (hours.length < 2)
      hours = '0' + hours;
    if (minutes.length < 2)
      minutes = '0' + minutes;
    return html`<span id="hour">${hours}</span>:<span id="minutes">${minutes}</span>`;
  }

  tick() {
    if (this.isConnected) {
      this.time = new Date();
      setTimeout(() => requestAnimationFrame(() => this.tick()));
    }
  }

  connectedCallback() {
    super.connectedCallback();
    tick();
  }
}
customElements.define('watch-face', WatchFace);
