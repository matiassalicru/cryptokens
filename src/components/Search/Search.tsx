import { SyntheticEvent, useState } from 'react'

// Hooks
import { useToken } from '../TokenRowContainer/hooks/useTokens'

// Styles
import { SCInputSearch } from './styles'

export const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const { page, fetchData } = useToken()

  const onSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value)
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    fetchData(page, searchValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <SCInputSearch type='text' placeholder='Search..' onChange={onSearch} />
    </form>
  )
}
