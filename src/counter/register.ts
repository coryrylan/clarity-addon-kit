import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { minusIcon } from '@cds/core/icon/shapes/minus.js';
import { plusIcon } from '@cds/core/icon/shapes/plus.js';
import { CdaCounter } from './counter.element.js';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(plusIcon, minusIcon);

!customElements.get('cda-counter')
  ? window.customElements.define('cda-counter', CdaCounter)
  : console.warn('cda-counter registered already');

declare global {
  interface HTMLElementTagNameMap {
    'cda-counter': CdaCounter;
  }
}
