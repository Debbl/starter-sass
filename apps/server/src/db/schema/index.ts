import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export * from './auth'

export const usersTable = sqliteTable('users_table', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
})
