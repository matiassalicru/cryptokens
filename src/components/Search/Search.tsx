import { SyntheticEvent, useContext, useState } from 'react'

// Context
import { TokensContext } from '../../context/TokensContext'

// Hooks
import { useToken } from '../TokenRowContainer/hooks/useTokens'

// Styles
import { SCInputSearch, SCForm } from './styles'

export const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const { tokens, setTokens, loading, setLoading } = useContext(TokensContext)
  const { page, fetchData } = useToken(tokens, setTokens, loading, setLoading)

  const onSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.toUpperCase())
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    fetchData(page, searchValue)
  }

  return (
    <SCForm onSubmit={onSubmit}>
      <SCInputSearch type='text' placeholder='Search..' onChange={onSearch} />
    </SCForm>
  )
}
