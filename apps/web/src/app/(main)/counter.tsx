'use client'
import { Trans } from '@lingui/react/macro'
import { PartyPopper } from 'lucide-react'
import { Button } from '~/components/ui/button'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button type='button' variant='outline' onClick={() => setCount(count + 1)}>
      <PartyPopper />
      <Trans>Hi</Trans> {count}
    </Button>
  )
}
