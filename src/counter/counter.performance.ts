import { html } from 'lit';
import { expect} from '@open-wc/testing';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '../../dist/lib/counter/register.js';

describe('cda-counter performance', () => {
  it(`should bundle and treeshake cds-counter`, async () => {
    expect((await testBundleSize('./dist/lib/counter/register.js')).kb).to.below(19);
  });

  it('should render 100 cda-counter under 250ms', async () => {
    const result = await testRenderTime(html`<cda-counter></cda-counter>`, { iterations: 100, average: 5 });
    expect(result.duration).to.below(250);
  });
});
