import { createContext, useState } from 'react'
import { connect, useData, Obj, Widget, ContentTag } from 'scrivito'

export const DataBatchContext = createContext<{
  hasMore: () => boolean
  loadMore: () => void
}>({
  hasMore: () => true,
  loadMore: () => {
    throw new Error('loadMore is not provided!')
  },
})

export const DataBatchContextProvider = connect(
  function DataBatchContextProvider({
    content,
    attribute,
  }: {
    content: Obj | Widget
    attribute: string
  }) {
    const dataScope = useData()
    const configuredLimit = dataScope.limit() ?? 20
    const [limit, setLimit] = useState(configuredLimit)
    const [initialLimit, setInitialLimit] = useState(configuredLimit)

    if (initialLimit !== configuredLimit) {
      setInitialLimit(configuredLimit)
      setLimit(configuredLimit)
    }

    const hasMore = () =>
      dataScope.transform({ limit: limit + 1 }).take().length > limit

    const loadMore = () => setLimit((prevLimit) => prevLimit + configuredLimit)

    return (
      <DataBatchContext.Provider value={{ hasMore, loadMore }}>
        <ContentTag
          content={content}
          attribute={attribute}
          dataContext={dataScope.transform({ limit })}
        />
      </DataBatchContext.Provider>
    )
  },
)
