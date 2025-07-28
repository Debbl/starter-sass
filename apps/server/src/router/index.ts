import { t } from '@lingui/core/macro'
import { os } from '@orpc/server'
import { cookies, headers } from 'next/headers'
import { requiredLocaleMiddleware } from '~/middlewares/locale'

export const base = os.use(async ({ next }) =>
  next({
    context: {
      headers: await headers(),
      cookies: await cookies(),
    },
  }),
)

const hi = base.use(requiredLocaleMiddleware).handler(async () => {
  return t`hi`
})

export const router = {
  hi,
}

export type Router = typeof router
