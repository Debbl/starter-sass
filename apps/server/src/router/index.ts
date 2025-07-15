import { os } from '@orpc/server'

const test = os.handler(async () => {
  return 'hi'
})

export const router = {
  test,
}

export type Router = typeof router
