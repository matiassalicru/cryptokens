// Types
import { FunctionComponent } from 'react'
import {
  TokenRowContainerPropsTypes,
  TokenTypes,
} from './TokenRowContainer.interface'

// Styles
import { SCTokenContainer } from './styles'
import { TokenRow } from './TokenRow/TokenRow'

export const TokenRowContainer: FunctionComponent<
  TokenRowContainerPropsTypes
> = ({ tokens }) => {
  return (
    <SCTokenContainer>
      {tokens?.map((coin: TokenTypes) => (
        <TokenRow key={coin.id} coin={coin} />
      ))}
    </SCTokenContainer>
  )
}
