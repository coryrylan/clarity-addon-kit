import { expect, fixture, html } from '@open-wc/testing';

import './register.js';
import { CdaCounter } from './counter.element.js';

describe('cda-counter', () => {
  let component: CdaCounter;

  beforeEach(async () => {
    component = await fixture(html`<cda-counter></cda-counter>`);
  });

  it('has a default count value of 0', () => {
    expect(component.value).to.equal(0);
  });
});
