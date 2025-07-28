import { t } from '@lingui/core/macro'
import { os } from '@orpc/server'
import { requiredHeadersMiddleware } from '~/middlewares/headers'
import { requiredLocaleMiddleware } from '~/middlewares/locale'

const hi = os
  .use(requiredHeadersMiddleware)
  .use(requiredLocaleMiddleware)
  .handler(async () => {
    return t`hi`
  })

export const router = {
  hi,
}

export type Router = typeof router
