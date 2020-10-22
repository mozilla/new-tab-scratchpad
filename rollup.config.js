/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';
import typescript from 'rollup-plugin-typescript';
import postcss from 'postcss';
import sveltePreprocess from 'svelte-preprocess';
import scss from 'rollup-plugin-scss';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;

export default [{
  input: 'src/main.ts',
  output: {
    format: 'iife',
    name: 'app',
    dir: './public'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess([
        scss(),
        postcss(),
      ]),
      dev: !production
    }),
    scss(),
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
      extensions: ['.svelte', '.mjs', '.js', '.json', '.node']
    }),
    commonjs(),
    svg(),
    typescript({
      sourceMap: !production,
      inlineSources: !production
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}];

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    }
  };
}
