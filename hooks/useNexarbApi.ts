import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'

export const useNexarbApi = <ResponseBody = any, RequestConfig = any>(
  apiFunction: (config?: RequestConfig) => Promise<{ data: ResponseBody }>,
  requestConfig?: RequestConfig
) => {
  const [data, setData] = useState<ResponseBody>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<AxiosError>()

  useEffect(() => {
    setLoading(true)
    setError(undefined)

    apiFunction(requestConfig)
      .then((res) => {
        setData(res.data)
        setError(undefined)
      })
      .catch((e) => {
        setError(e)
        setData(undefined)
      })
      .finally(() => setLoading(false))
  }, [apiFunction, requestConfig])

  return { loading, data, error }
}
