import { MouseEventHandler } from 'react'

// Styles
import { SCButton } from './styles'

type PropTypes = {
  onClick: MouseEventHandler
  text: string
  disabled: boolean
}

export const Button = ({ onClick, text, disabled }: PropTypes) => {
  return (
    <SCButton onClick={onClick} disabled={disabled}>
      {text}
    </SCButton>
  )
}
