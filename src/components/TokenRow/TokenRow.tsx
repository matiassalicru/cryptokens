import { useEffect } from 'react'

// Types
import { TokenTypes } from './TokenRow.interface'

// Styles
import { SCTokenContainer, SCCoinContainer, SCTitle } from './styles'
import { useToken } from './hooks/useTokens'

export const TokenRow = () => {
  const { tokens, loading, fetchData } = useToken()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <SCTokenContainer>
      <SCTitle>Cryptokens</SCTitle>
      {!loading ? (
        tokens.map((coin: TokenTypes) => (
          <SCCoinContainer key={coin.id}>
            <p>Token: {coin.id}</p>
            <img src={coin.logo_url} alt='token logo' width={40} />
            <h5>Price: USD ${coin.price}</h5>
          </SCCoinContainer>
        ))
      ) : (
        <>Loading</>
      )}
    </SCTokenContainer>
  )
}
