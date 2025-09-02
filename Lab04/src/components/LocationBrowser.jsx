import React, { useState } from 'react'
import { useLocation } from '../hooks/useLocation'
import { Loading } from './Loading'

export const LocationBrowser = () => {
  const [id, setId] = useState(1)
  const { data, isLoading, hasError } = useLocation(id)

  const next = () => setId((prev) => prev + 1)
  const prev = () => setId((prev) => (prev > 1 ? prev - 1 : 1))
  const reset = () => setId(1)

  return (
    <div>
      <h2>Locations: </h2>
      {isLoading && <Loading />}
      {hasError && <div>Error loading location.</div>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Type: {data.type}</p>
          <p>Dimension: {data.dimension}</p>
          <p>Residents: {data.residents.length}</p>
        </div>
      )}
      <button onClick={prev} disabled={id === 1}>Previous</button>
      <button onClick={next}>Next</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}