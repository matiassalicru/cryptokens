export interface TokenTypes {
  id: string
  logo_url: string
  price: number
}

export interface TokenRowContainerPropsTypes {
  tokens: TokenTypes[]
}