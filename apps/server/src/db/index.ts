import { env } from '@workspace/env'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'

export const db = drizzle({ connection: { url: env.DB_FILE_NAME }, schema })
