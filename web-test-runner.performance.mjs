import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter } from '@web/test-runner';
import { bundlePerformancePlugin, renderPerformancePlugin, performanceReporter } from 'web-test-runner-performance';
import baseConfig from './web-test-runner.config.mjs';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  ...baseConfig,
  concurrency: 1,
  concurrentBrowsers: 1,
  files: ['./src/**/*.performance.ts'],
  browsers: [playwrightLauncher({ product: 'chromium', launchOptions: { headless: !!process.env.GITHUB_ACTION } })],
  plugins: [
    ...baseConfig.plugins,
    renderPerformancePlugin(),
    bundlePerformancePlugin({
      // writePath: `./dist/performance`,
      aliases:  [{ find: /^test-module$/, replacement: `./test-module` }]
    }),
  ],
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    performanceReporter({ writePath: `./dist/performance` })
  ]
});
