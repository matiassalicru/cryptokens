import { useState } from "react"

export const useToken = () => {
  const [tokens, setTokens] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const res = await fetch(
      'https://api.nomics.com/v1/currencies/ticker?key=3d338912c9099561c0ca6f20e4491d624e19014d&per-page=2'
    )
    const data = await res.json()
    setTokens(data && data)
    setLoading(false)
  }

  return {
    tokens,
    loading,
    fetchData,
  }
}
