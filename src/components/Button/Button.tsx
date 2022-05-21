import { MouseEventHandler } from 'react'

import { SCButton } from './styles'

type PropTypes = {
  onClick: MouseEventHandler
  text: string
}

export const Button = ({ onClick, text }: PropTypes) => {
  return <SCButton onClick={onClick}>{text}</SCButton>
}
