import { os } from '@orpc/server'
import { getDB } from '~/db'
import * as schema from '~/db/schema'

const hi = os.handler(async () => {
  const db = getDB()

  const result = await db.select().from(schema.usersTable).limit(1)
  return `hi ${result[0]?.id}`
})

export const router = {
  hi,
}

export type Router = typeof router
