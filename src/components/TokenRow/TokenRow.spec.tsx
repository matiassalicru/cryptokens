import { render, screen } from '@testing-library/react'
import { TokenRow } from './TokenRow'

const tokensMock = [
  {
    id: 'BTC',
    logo_url: 'https://btclogo.com',
    price: 62500,
  },
]

const setup = (mock = { tokens: tokensMock }) => render(<TokenRow {...mock} />)

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

    const tokenId = screen.getByText('Token: ETH')
    expect(tokenId).toBeInTheDocument()
  })
})
