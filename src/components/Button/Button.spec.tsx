// Button
import { Button } from './Button'

import { fireEvent, getByText, render, screen } from '@testing-library/react'

const setup = (mock = { text: 'button', onClick: jest.fn }) =>
  render(<Button {...mock} />)

describe('<Button/>', () => {
  it('Shows the button', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  it('Shows the text "Click me!" on button', () => {
    setup({ text: 'Click me!', onClick: jest.fn })
    const text = screen.getByText('Click me!')

    expect(text).toBeInTheDocument()
  })

  it('Calls onClick function when the button is clicked', () => {
    const { container } = setup()
    fireEvent(
      getByText(container, 'button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
  })
})
