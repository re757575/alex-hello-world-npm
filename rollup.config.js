import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'; // 將以 CommonJS 寫的模組轉換成 ES6
import resolve from 'rollup-plugin-node-resolve'; // 解析 node_modules 裡面的第三方套件
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: pkg.source,
    output: {
      name: 'Hello',
      // env: 'production',
      format: 'umd', // <script>
      file: pkg.browser,
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
      }),
      uglify(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: pkg.source,
    external: ['lodash'],
    output: [
      { file: pkg.main, format: 'cjs' }, // requires
      { file: pkg.module, format: 'es' } // imports
    ],
    plugins: [
      resolve(),
    ]
  }
];
