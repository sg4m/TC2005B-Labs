import React, { useState } from 'react'
import { useEpisode } from '../hooks/useEpisode'
import { Loading } from './Loading'

export const EpisodeGuide = () => {
  const [id, setId] = useState(1)
  const { data, isLoading, hasError } = useEpisode(id)

  const next = () => setId((prev) => prev + 1)
  const prev = () => setId((prev) => (prev > 1 ? prev - 1 : 1))
  const reset = () => setId(1)

  return (
    <div>
      <h2>Episodes: </h2>
      {isLoading && <Loading />}
      {hasError && <div>Error loading episode.</div>}
      {data && (
        <div>
          <h3>{data.episode}: {data.name}</h3>
          <p>Air date: {data.air_date}</p>
          <p>Characters: {data.characters.length}</p>
        </div>
      )}
      <button onClick={prev} disabled={id === 1}>Previous</button>
      <button onClick={next}>Next</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}