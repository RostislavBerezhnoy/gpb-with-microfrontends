import { useEffect } from 'react'
import { ServiceQueries } from 'api'
import { Table } from 'antd'
import { WrappedBox, Loader, errorToastWithButton } from 'gpb_ui'
import { columns } from './helpers'

export const Test2Page = () => {
  const { useGetServiceListQuery } = ServiceQueries

  const {
    data: services = [],
    isLoading: isServicesLoading,
    isError: isServicesError,
    refetch: refetchServices,
  } = useGetServiceListQuery()

  useEffect(() => {
    if (isServicesError) errorToastWithButton({ retry: () => refetchServices() })
  }, [isServicesError, refetchServices])

  if (isServicesLoading)
    return (
      <WrappedBox>
        <Loader />
      </WrappedBox>
    )

  return <Table columns={columns} dataSource={services} rowKey={({ id }) => id} />
}
