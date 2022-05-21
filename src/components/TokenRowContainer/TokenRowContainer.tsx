// Types
import { FunctionComponent } from 'react'
import { TokenRowPropsTypes, TokenTypes } from './TokenRowContainer.interface'

// Styles
import {
  SCTokenContainer,
  SCCoinContainer,
  SCTokenTitle,
  SCTokenPrice,
} from './styles'

export const TokenRowContainer: FunctionComponent<TokenRowPropsTypes> = ({
  tokens,
}) => {
  return (
    <SCTokenContainer>
      {tokens?.map((coin: TokenTypes) => (
        <SCCoinContainer key={coin.id}>
          <SCTokenTitle>Token: {coin.id}</SCTokenTitle>
          <img src={coin.logo_url} alt='token logo' width={40} />
          <SCTokenPrice>Price: USD ${coin.price}</SCTokenPrice>
        </SCCoinContainer>
      ))}
    </SCTokenContainer>
  )
}
