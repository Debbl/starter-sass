import swc from '@rollup/plugin-swc'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  dts: {
    sourcemap: true,
  },
  exports: true,
  sourcemap: true,
  treeshake: true,
  plugins: [swc()],
})
