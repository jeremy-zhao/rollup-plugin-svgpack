import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/rollup-plugin-svgpack.ts',
  output: {
    file: 'dist/rollup-plugin-svgpack.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [typescript()],
  external: ['ramda', 'path', 'fs-extra', 'svgo', 'svgstore'],
}
