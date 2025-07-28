import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@workspace/shared'

export const linguiConfig = {
  sourceLocale: DEFAULT_LOCALE,
  locales: SUPPORTED_LOCALES,
} as const

export type SupportedLocales = (typeof linguiConfig.locales)[number]
