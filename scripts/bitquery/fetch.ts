import { getIntrospectionQuery, IntrospectionQuery } from 'graphql'

import { getHeaders } from '$/core/bitquery/constants'
import {
  graphqlEndpoint,
  graphqlQueriesEndpoint,
} from '$/core/bitquery/constants'
import type { IBitQuery } from '$/core/bitquery/interfaces/IBitQuery'
import fetch from 'node-fetch'

interface BitQueryResponse {
  msg: null | string
  queries: IBitQuery[]
}

export async function fetchBitQueries(): Promise<BitQueryResponse> {
  return (
    await fetch(graphqlQueriesEndpoint, {
      method: 'GET',
      ...getHeaders(),
    })
  ).json()
}

export async function fetchIntrospection(): Promise<IntrospectionQuery> {
  const introspectionQuery = getIntrospectionQuery()
  const introspectionQueryName = 'IntrospectionQuery'
  const { data } = await (
    await fetch(graphqlEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        query: introspectionQuery,
        operationName: introspectionQueryName,
      }),
      ...getHeaders(),
    })
  ).json()
  return data
}