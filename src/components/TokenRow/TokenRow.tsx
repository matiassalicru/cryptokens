// Types
import { FunctionComponent } from 'react'
import { TokenRowPropsTypes, TokenTypes } from './TokenRow.interface'

// Styles
import {
  SCTokenContainer,
  SCCoinContainer,
  SCTitle,
  SCTokenTitle,
  SCTokenPrice,
} from './styles'

export const TokenRow: FunctionComponent<TokenRowPropsTypes> = ({ tokens }) => {
  return (
    <SCTokenContainer>
      <SCTitle>Cryptokens</SCTitle>
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
