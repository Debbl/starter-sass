import { toNextJsHandler } from 'better-auth/next-js'
import { cache } from 'react'
import { getAuth } from '~/lib/auth'

export const authHandler = cache(() => {
  const auth = getAuth()

  return toNextJsHandler(auth)
})
