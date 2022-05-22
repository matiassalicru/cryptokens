import { Dispatch, SetStateAction, useState } from "react"
import { TokenTypes } from "../TokenRowContainer.interface"

export const useToken = (
  tokens: TokenTypes[],
  setTokens: Dispatch<SetStateAction<TokenTypes[]>>,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
  ): any => {
  const [page, setPage] = useState(1)

  const fetchData = async (page: number, searchValue?: string) => {
    setLoading(true)
    if (searchValue) {
      const res = await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=3d338912c9099561c0ca6f20e4491d624e19014d&ids=${searchValue}&per-page=5&page=${page}`
      )
      const data = await res.json()
      setTokens(data && data)
      data && setLoading(false)
    } else {
      const res = await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=3d338912c9099561c0ca6f20e4491d624e19014d&per-page=5&page=${page}`
      )
      const data = await res.json()
      setTokens(data && data)
      data && setLoading(false)
    }
  }

  return {
    page,
    tokens,
    loading,
    setPage,
    fetchData,
  }
}
