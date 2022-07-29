import { useState, useEffect } from "react"

function useFetch(url, options) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line
  }, [])

  return { data, isLoading, error }
}
export default useFetch
