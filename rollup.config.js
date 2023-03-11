import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import autoprefixer from 'autoprefixer'
import copy from 'rollup-plugin-copy'
import styles from 'rollup-plugin-styles'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from "rollup-plugin-visualizer";

const packageJson = require('./package.json')
const dest = 'dist'

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
      assetFileNames: '[name][extname]',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
      assetFileNames: '[name][extname]',
    },
  ],
  external: [
    //'react',
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    commonjs(),
    styles({
      include: ['src/styles/**/*.scss'],
      mode: ['extract', 'styles/badger-ui.css'],
      plugins: [autoprefixer()],
    }),
    copy({
      targets: [
        {
          src: 'src/styles',
          dest: dest,
        },
        {
          src: 'icons/build.js',
          dest: 'dist/icons',
        },
        {
          src: 'src/config/icons.js',
          dest: 'dist/config',
        },
        {
          src: 'bin/*',
          dest: 'dist/bin',
          transform: (contents) =>
            contents.toString().replace('../src/config/icons.js', '@abw/badger-ui/dist/config/icons.js')
        },
      ],
    }),
    visualizer()
  ],
}
