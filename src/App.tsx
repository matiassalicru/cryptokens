import { useContext, useEffect } from 'react'

// Context
import { TokensContext } from './context/TokensContext'

// Components
import { TokenRowContainer } from './components/TokenRowContainer/TokenRowContainer'
import { Button } from './components/Button/Button'
import { Loading } from './components/Loading/Loading'
import { Search } from './components/Search/Search'

// Hooks
import { useToken } from './components/TokenRowContainer/hooks/useTokens'
import { SCContainer, SCTitle, SCButtonsWrapper } from './styles'

export const App = () => {
  const { tokens, setTokens, loading, setLoading } = useContext(TokensContext)
  const { fetchData, page, setPage } = useToken(
    tokens,
    setTokens,
    loading,
    setLoading
  )

  useEffect(() => {
    fetchData(page)
  }, [page])

  const nextPage = () => {
    setPage((prevPage: number) => prevPage + 1)
  }

  const prevPage = () => {
    setPage((prevPage: number) => prevPage - 1)
  }

  return (
    <SCContainer>
      <SCTitle>Cryptokens</SCTitle>
      <Search />
      {!loading ? <TokenRowContainer tokens={tokens} /> : <Loading />}
      <SCButtonsWrapper>
        <Button
          text='Prev page'
          onClick={prevPage}
          disabled={page <= 1 || loading}
        />
        <Button text='Next page' onClick={nextPage} disabled={loading} />
      </SCButtonsWrapper>
    </SCContainer>
  )
}
