import { setI18n } from '@lingui/react/server'
import { domMax, LazyMotion } from 'motion/react'
import { ThemeProvider } from 'next-themes'
import { getI18nInstance } from '~/i18n'
import ProvidersClient from './index.client'
import type { SupportedLocales } from '~/i18n/config'

export interface ProvidersProps {
  lang: SupportedLocales
  children: React.ReactNode
}

export async function Providers({ lang, children }: ProvidersProps) {
  const i18n = await getI18nInstance(lang)
  setI18n(i18n)

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <ProvidersClient lang={lang}>
        <LazyMotion strict features={domMax}>
          {children}
        </LazyMotion>
      </ProvidersClient>
    </ThemeProvider>
  )
}
