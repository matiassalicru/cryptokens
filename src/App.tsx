import { useEffect } from 'react'

// Components
import { TokenRowContainer } from './components/TokenRowContainer/TokenRowContainer'
import { Button } from './components/Button/Button'

// Hooks
import { useToken } from './components/TokenRowContainer/hooks/useTokens'
import { SCContainer, SCTitle, SCButtonsWrapper } from './styles'
import { Loading } from './components/Loading/Loading'
import { Search } from './components/Search/Search'

export const App = () => {
  const { tokens, loading, fetchData, page, setPage } = useToken()

  useEffect(() => {
    fetchData(page)
  }, [page])

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  useEffect(() => {
    console.log('should update')
  }, [tokens])

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
