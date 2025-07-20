import { os } from '@orpc/server'

const hi = os.handler(async () => {
  return `hi`
})

export const router = {
  hi,
}

export type Router = typeof router
