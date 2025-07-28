// @ts-check
import { defineConfig } from '@debbl/eslint-config'

export default defineConfig({
  ignores: {
    files: ['apps/server/drizzle', 'apps/server/src/locales'],
  },
  typescript: true,
  react: {
    next: true,
    compiler: true,
  },
  tailwindcss: 'prettier',
})
