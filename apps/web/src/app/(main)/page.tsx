'use client'
import { LangSwitcher } from '~/components/lang-switcher'
import { ThemeSwitcher } from '~/components/theme-switcher'
import { orpc } from '~/lib/orpc'
import { Counter } from './counter'

export default function Home() {
  const { data } = useQuery(orpc.hi.queryOptions())

  return (
    <main className='flex h-full flex-col items-center justify-center gap-y-4'>
      <motion.div
        className='size-16 rounded-md border bg-blue-600'
        whileHover={{ scale: 1.1, rotate: '360deg' }}
      />
      <Counter />

      <p>{data}</p>

      <ThemeSwitcher />
      <LangSwitcher />
    </main>
  )
}
