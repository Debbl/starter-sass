'use client'
import { setupI18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useState } from 'react'
import type { Messages } from '@lingui/core'
import type { SupportedLocales } from '~/i18n/config'

export function LinguiClientProvider({
  children,
  locale,
  locales,
  messages,
}: {
  children: React.ReactNode
  locale: string
  locales?: SupportedLocales
  messages: Messages
}) {
  const [i18n] = useState(() =>
    setupI18n({
      locale,
      locales,
      messages: { [locale]: messages },
    }),
  )

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
