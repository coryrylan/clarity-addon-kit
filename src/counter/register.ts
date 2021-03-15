import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { minusIcon } from '@cds/core/icon/shapes/minus.js';
import { plusIcon } from '@cds/core/icon/shapes/plus.js';
import { CdaCounter } from './counter.element.js';

ClarityIcons.addIcons(plusIcon, minusIcon);
window.customElements.define('cda-counter', CdaCounter);
