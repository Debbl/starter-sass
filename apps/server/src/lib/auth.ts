import { env } from '@workspace/env'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { cache } from 'react'
import { getDB } from '~/db'

export const getAuth = cache(() => {
  const db = getDB()

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'sqlite',
    }),
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      },
    },
  })
})
