import { AxiosError } from 'axios'
import { DependencyList, useEffect, useState } from 'react'

export const useNexarbApi = <ResponseBody = any, RequestConfig = any>(
  apiFunction: (config?: RequestConfig) => Promise<{ data: ResponseBody }>,
  requestConfig?: RequestConfig,
  deps: DependencyList = []
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
  }, [apiFunction, requestConfig, ...deps])

  return { loading, data, error }
}
