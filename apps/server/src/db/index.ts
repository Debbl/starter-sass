import { env } from '@workspace/env'
import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './schema'

export const getDB = () => {
  const client = new Database(env.DB_FILE_NAME)
  return drizzle({ client, schema })
}
