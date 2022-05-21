import { render, screen } from '@testing-library/react'
import { TokenRowContainer } from './TokenRowContainer'

const tokensMock = [
  {
    id: 'BTC',
    logo_url: 'https://btclogo.com',
    price: 62500,
  },
]

const setup = (mock = { tokens: tokensMock }) =>
  render(<TokenRowContainer {...mock} />)

describe('<TokenRow />', () => {
  it('Shows the element with the selected Token', () => {
    const TokensMock = [
      {
        id: 'ETH',
        logo_url: 'https://ethlogo.com',
        price: 3200,
      },
    ]
    setup({ tokens: TokensMock })

    const tokenId = screen.getByText('ETH')
    expect(tokenId).toBeInTheDocument()
  })
})
