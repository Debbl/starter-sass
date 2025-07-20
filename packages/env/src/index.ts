/* eslint-disable n/prefer-global/process */
import path from 'node:path'
import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

const isDev = process.env.NODE_ENV === 'development'

export const env = createEnv({
  server: {
    DB_FILE_NAME: z.string(),
  },
  runtimeEnv: (() => {
    if (isDev) {
      const __dirname = path.dirname(new URL(import.meta.url).pathname)

      const envPath = path.join(__dirname, '../../../.env')
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('dotenv').config({ path: envPath })
    }

    return process?.env ?? {}
  })(),
  skipValidation: !isDev,
})
