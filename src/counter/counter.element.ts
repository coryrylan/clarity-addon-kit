import { html, LitElement, property } from 'lit-element';
import { styles } from './counter.element.styles';
import { global } from '../global.styles';

export class CdaCounter extends LitElement {
  static get styles() {
    return [global, styles];
  }

  @property({ type: Number }) value = 0;

  render() {
    return html`
      <div cds-layout="horizontal gap:md align:center">
        <cds-icon-button
          aria-label="decrement"
          @click=${() => this.emit('decrement')}
        >
          <cds-icon shape="minus"></cds-icon>
        </cds-icon-button>
        <div class="value">
          <p cds-text="subsection center">${this.value}</p>
        </div>
        <cds-icon-button
          aria-label="increment"
          @click=${() => this.emit('increment')}
        >
          <cds-icon shape="plus"></cds-icon>
        </cds-icon-button>
      </div>
    `;
  }

  private emit(value: string) {
    this.dispatchEvent(new CustomEvent(value));
  }
}
