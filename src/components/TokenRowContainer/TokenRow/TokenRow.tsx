// Types
import { FunctionComponent } from 'react'
import { TokenRowPropTypes } from './TokenRow.interface'

// Styles
import {
  SCCoinContainer,
  SCTokenTitle,
  SCTokenPrice,
  SCTokenLogo,
} from './styles'

export const TokenRow: FunctionComponent<TokenRowPropTypes> = ({ coin }) => {
  return (
    <SCCoinContainer key={coin.id}>
      <SCTokenLogo src={coin.logo_url} alt='Token logo' width={40} />
      <SCTokenTitle>{coin.id}</SCTokenTitle>
      <SCTokenPrice>USD ${coin.price}</SCTokenPrice>
    </SCCoinContainer>
  )
}
