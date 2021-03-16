import { expect } from '@esm-bundle/chai';
import { html } from 'lit-element';

/**
 * @internal
 * While stable, @cds/core/test is an internal API not subject to semver updates.
 * We may open this API up as a fully supported public API in the future.
 */
import {
  componentIsStable,
  createTestElement,
  removeTestElement,
} from '@cds/core/test';

import './register.js';
import { CdaCounter } from './counter.element.js';

describe('cda-counter', () => {
  let testElement: HTMLElement;
  let component: CdaCounter;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cda-counter></cda-counter>`);
    component = testElement.querySelector('cda-counter') as CdaCounter;
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('has a default count value of 0', async () => {
    await componentIsStable(component);
    expect(component.value).to.equal(0);
  });

  it('increases the counter on button click', async () => {
    await componentIsStable(component);
    expect(component.value).to.equal(0);

    component.value = 1;
    await componentIsStable(component);
    expect(
      component.shadowRoot?.querySelector('.value')?.innerHTML.includes('1')
    ).to.equal(true);
  });
});
