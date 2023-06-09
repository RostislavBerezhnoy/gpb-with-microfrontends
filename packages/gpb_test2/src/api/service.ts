import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { preparedBaseQueryFn } from 'utils/preparedBaseQueryFn'
import { ServiceDto, ServiceDtoWithContent } from 'types/api'

export const SERVICE_TYPE = 'SERVICE_TYPE'

export const ServiceQueries = createApi({
  reducerPath: SERVICE_TYPE,
  baseQuery: preparedBaseQueryFn(),
  tagTypes: [SERVICE_TYPE],
  endpoints: build => ({
    getServiceList: build.query<ServiceDto[], void>({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
    }),
    getServiceById: build.query<ServiceDtoWithContent, string>({
      query: id => ({
        url: `/services/${id}`,
        method: 'GET',
      }),
    }),
  }),
})
