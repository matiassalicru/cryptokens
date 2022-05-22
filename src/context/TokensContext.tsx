/* eslint-disable react/prop-types */
import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

// Types
import { TokenTypes } from '../components/TokenRowContainer/TokenRowContainer.interface'

interface TokensContextProps {
  children?: ReactNode
}

interface TokensContextTypes {
  tokens: TokenTypes[]
  setTokens: Dispatch<SetStateAction<TokenTypes[]>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const TokensContext = createContext<TokensContextTypes>({
  tokens: [{ id: '', logo_url: '', price: 0 }],
  setTokens: () => true,
  loading: false,
  setLoading: () => true,
})

const TokenContextProvider: FunctionComponent<TokensContextProps> = ({
  children,
}) => {
  const [tokens, setTokens] = useState<TokenTypes[]>([])
  const [loading, setLoading] = useState(true)

  return (
    <TokensContext.Provider value={{ tokens, setTokens, loading, setLoading }}>
      {children}
    </TokensContext.Provider>
  )
}

export default TokenContextProvider
