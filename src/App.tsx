import { useEffect } from 'react'

// Components
import { TokenRowContainer } from './components/TokenRowContainer/TokenRowContainer'
import { Button } from './components/Button/Button'

// Hooks
import { useToken } from './components/TokenRowContainer/hooks/useTokens'
import { SCContainer, SCTitle } from './styles'
import { Loading } from './components/Loading/Loading'

export const App = () => {
  const { tokens, loading, fetchData } = useToken()

  const updateTokens = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SCContainer>
      <SCTitle>Cryptokens</SCTitle>
      {!loading ? <TokenRowContainer tokens={tokens} /> : <Loading />}
      <Button text='Update coins' onClick={updateTokens} />
    </SCContainer>
  )
}
