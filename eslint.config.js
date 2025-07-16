// @ts-check
import { defineConfig } from '@debbl/eslint-config'

export default defineConfig({
  ignores: {
    files: ['apps/server/drizzle/**/*'],
  },
  typescript: true,
  react: {
    next: true,
    compiler: true,
  },
  tailwindcss: 'prettier',
})
