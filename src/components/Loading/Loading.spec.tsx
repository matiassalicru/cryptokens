import { render, screen } from '@testing-library/react'
import { Loading } from './Loading'

describe('<Loading/>', () => {
  it('Shows the loading component', () => {
    render(<Loading />)

    const loadingComp = screen.getByTestId('loading-component')
    expect(loadingComp).toBeInTheDocument()
  })
})
