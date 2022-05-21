import React from 'react'
import { MouseEventHandler } from "react"

type PropTypes = {
  onClick: MouseEventHandler,
  text: string
}

export const Button = ({onClick, text}: PropTypes) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}