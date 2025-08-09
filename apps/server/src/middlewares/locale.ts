import { setupI18n } from '@lingui/core'
import { os } from '@orpc/server'
import { SUPPORTED_LOCALES, X_NEXT_LOCALE } from '@workspace/shared'
import { cache } from 'react'
import { messages as enMessages } from '../locales/en/messages.po'
import { messages as zhMessages } from '../locales/zh/messages.po'
import type { SupportedLocale } from '@workspace/shared'

const getI18n = cache((locale: SupportedLocale) => {
  return setupI18n({
    locale,
    locales: [...SUPPORTED_LOCALES],
    messages: {
      en: enMessages,
      zh: zhMessages,
    },
  })
})

export const requiredLocaleMiddleware = os
  .$context<{ headers: Headers }>()
  .middleware(async ({ context, next }) => {
    const headers = context.headers
    const locale = (headers.get(X_NEXT_LOCALE) ?? 'en') as 'en' | 'zh'

    const i18n = await getI18n(locale)

    return next({
      context: {
        locale,
        i18n,
      },
    })
  })
