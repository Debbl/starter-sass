import { i18n } from '@lingui/core'
import { os } from '@orpc/server'
import { X_NEXT_LOCALE } from '@workspace/shared'
import { cache } from 'react'
import { messages as enMessages } from '../locales/en/messages.po'
import { messages as zhMessages } from '../locales/zh/messages.po'
import type { SupportedLocale } from '@workspace/shared'

const getMessage = cache((locale: SupportedLocale) => {
  if (locale === 'zh') {
    return zhMessages
  }
  return enMessages
})

export const requiredLocaleMiddleware = os
  .$context<{ headers: Headers }>()
  .middleware(async ({ context, next }) => {
    const headers = context.headers
    const locale = (headers.get(X_NEXT_LOCALE) ?? 'en') as 'en' | 'zh'

    i18n.load('en', getMessage(locale))
    i18n.activate('en')

    return next({
      context: {
        locale,
        i18n,
      },
    })
  })
