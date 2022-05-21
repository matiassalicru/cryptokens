import { useEffect } from 'react'

// Components
import { TokenRow } from './components/TokenRow/TokenRow'
import { Button } from './components/Button/Button'

// Hooks
import { useToken } from './components/TokenRow/hooks/useTokens'
import { SCContainer } from './styles'

export const App = () => {
  const { tokens, loading, fetchData } = useToken()

  const onButtonClick = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SCContainer>
      {!loading ? <TokenRow tokens={tokens} /> : <>Loading</>}
      <Button text='Update coins' onClick={onButtonClick} />
    </SCContainer>
  )
}
