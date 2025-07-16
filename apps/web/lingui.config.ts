import { defineConfig } from '@lingui/cli'

export default defineConfig({
  // async from apps/web/src/i18n/config.ts
  sourceLocale: 'en',
  locales: ['en', 'zh'],
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
})
