/**
 * Performance Build - Bundles & Tree Shaking
 *
 * This build is to check to ensure that Clarity Core properly can be consumed and tree shaken by ESM bundlers.
 * We treeshake at both the component level an symbol level.
 * Only the badge component, icon component and imported icons to be included in the final application.
 */

 import { nodeResolve } from '@rollup/plugin-node-resolve';
 import { terser } from 'rollup-plugin-terser';
 import alias from '@rollup/plugin-alias';
 import virtual from '@rollup/plugin-virtual';
 import execute from 'rollup-plugin-shell';
 import path from 'path';
 
 const sourcemap = true; // !!process.argv.find(v => v === '--sourcemap');
 
 const testFile = `
   import 'lib/counter/register.js';
   import { test } from 'lib';
   test();
 `;
 
 export default {
   input: 'entry',
   output: { file: './dist/bundle.js', sourcemap: true },
   plugins: [
     virtual({ entry: testFile }),
     nodeResolve(),
     alias({ entries: [{ find: 'lib', replacement: path.resolve(path.resolve(__dirname), './dist/lib') }] }),
     terser({ ecma: 2020, output: { comments: false }, compress: { unsafe: true, passes: 2 } }),
     execute({
       commands: [
         `bundlesize`,
         sourcemap ? `source-map-explorer dist/bundle.js` : ':',
         'del ./dist/bundle.js ./dist/bundle.js.map',
       ],
       hook: 'writeBundle',
       sync: true,
     }),
   ],
 };
 