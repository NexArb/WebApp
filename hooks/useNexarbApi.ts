import { useEffect, useState } from 'react'

// Extend RequestConfig to include a headers property
export type ExtendedRequestConfig<RequestConfig> = RequestConfig & {
  headers?: { [key: string]: string }
}

export const useNexarbApi = <ResponseBody = any, RequestConfig = any>(
  url: string,
  requestConfig?: ExtendedRequestConfig<RequestConfig>
) => {
  const [data, setData] = useState<ResponseBody | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(url, {
      ...requestConfig,
      headers: {
        'Content-Type': 'application/json',
        ...requestConfig?.headers
      }
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Something went wrong')
        }
        return response.json()
      })
      .then((responseData) => {
        setData(responseData)
      })
      .catch((e) => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, requestConfig])

  return { loading, data, error }
}
