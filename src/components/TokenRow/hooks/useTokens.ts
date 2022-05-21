import { useState } from "react"
import { TokenTypes } from "../TokenRow.interface"

export const useToken = () => {
  const [loading, setLoading] = useState(true)
  const [tokens, setTokens] = useState<TokenTypes[]>([])

  const fetchData = async () => {
    setLoading(true)
    const res = await fetch(
      'https://api.nomics.com/v1/currencies/ticker?key=3d338912c9099561c0ca6f20e4491d624e19014d&per-page=2'
    )
    const data = await res.json()
    setTokens(data && data)
    data && setLoading(false)
  }

  return {
    tokens,
    loading,
    fetchData,
  }
}
