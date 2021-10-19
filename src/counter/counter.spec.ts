import { expect, fixture, html } from '@open-wc/testing';

import { CdaCounter } from 'lib/counter';
import 'lib/counter/register.js';

describe('cda-counter', () => {
  let component: CdaCounter;

  beforeEach(async () => {
    component = await fixture(html`<cda-counter></cda-counter>`);
  });

  it('has a default count value of 0', () => {
    expect(component.value).to.equal(0);
  });
});
