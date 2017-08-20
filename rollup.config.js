import npm from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import cjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import babel from 'rollup-plugin-babel';
import gas from 'rollup-plugin-gas';

export default {
  entry: 'src/index.ts',
  dest: 'dist/bundle.js',
  format: 'es',
  plugins: [
    sourcemaps(),
    typescript(),
    inject({
      modules: {
        __awaiter: 'typescript-awaiter'
      }
    }),
    npm({ jsnext: true }),
    cjs(),
    babel(),
    gas()
  ]
};