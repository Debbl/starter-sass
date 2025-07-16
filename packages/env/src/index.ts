import path from 'node:path'
import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DB_FILE_NAME: z.string(),
  },

  runtimeEnv: (() => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname)

    const envPath = path.join(__dirname, '../../../.env')
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('dotenv').config({ path: envPath })

    // eslint-disable-next-line n/prefer-global/process
    return process?.env ?? {}
  })(),
})
