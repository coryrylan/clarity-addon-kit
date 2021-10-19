import { expect} from '@open-wc/testing';
import { testBundleSize } from 'web-test-runner-performance/browser.js';
import '../dist/lib/counter/register.js';

describe('performance', () => {
  it(`should meet maximum css bundle size limits`, async () => {
    expect((await testBundleSize('./dist/lib/global.min.css')).kb).to.below(7);
  });

  it(`should bundle and treeshake all components`, async () => {
    const module = `
      import './dist/lib/counter/register.js';
    `;
    expect((await testBundleSize(module)).kb).to.below(19);
  });
});
