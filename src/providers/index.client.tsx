import { setI18n } from '@lingui/react/server'
import { getI18nInstance } from '~/i18n'
import { LinguiClientProvider } from './lingui-client-provider'
import type { SupportedLocales } from '~/i18n/config'
import type { ProvidersProps } from './index'

export default async function ProvidersClient({
  lang,
  children,
}: ProvidersProps) {
  const i18n = await getI18nInstance(lang)
  setI18n(i18n)

  return (
    <LinguiClientProvider
      locale={lang}
      locales={i18n.locales as SupportedLocales}
      messages={i18n.messages}
    >
      {children}
    </LinguiClientProvider>
  )
}
