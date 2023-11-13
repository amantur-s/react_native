import { useEffect, useState } from "react"

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const axios = require("axios")

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '16065fa76emsh24fefed413544e7p1723bajsn6759a038ecfc',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  }

  const fetchData = async () => {
    try {
      const response = await axios.request(options)
      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert("ошибка при получении данных")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }
  return { data, isLoading, error, refetch }
}

export default useFetch
