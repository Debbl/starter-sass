import swc from '@rollup/plugin-swc'
import { defineConfig } from 'tsdown'
import lingui from 'unplugin-lingui/rolldown'

export default defineConfig({
  entry: 'src/index.ts',
  dts: {
    sourcemap: true,
  },
  exports: true,
  sourcemap: true,
  treeshake: true,
  plugins: [lingui(), swc()],
})
