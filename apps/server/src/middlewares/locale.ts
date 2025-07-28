import { setupI18n } from '@lingui/core'
import { os } from '@orpc/server'
import { X_NEXT_LOCALE } from '@workspace/shared'
import { cache } from 'react'
import { messages as enMessages } from '../locales/en/messages.js'
import { messages as zhMessages } from '../locales/zh/messages.js'

const getAllMessages = cache(() => {
  return {
    en: enMessages,
    zh: zhMessages,
  }
})

export const requiredLocaleMiddleware = os
  .$context<{ headers: Headers }>()
  .middleware(async ({ context, next }) => {
    const headers = context.headers
    const locale = (headers.get(X_NEXT_LOCALE) ?? 'en') as 'en' | 'zh'

    const i18n = setupI18n({
      locale,
      messages: getAllMessages(),
    })

    return next({
      context: {
        locale,
        i18n,
      },
    })
  })
