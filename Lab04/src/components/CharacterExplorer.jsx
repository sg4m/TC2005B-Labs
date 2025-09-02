import React, { useState } from 'react'
import { useCharacter } from '../hooks/useCharacter'
import { Loading } from './Loading'

export const CharacterExplorer = () => {
  const [id, setId] = useState(1)
  const { data, isLoading, hasError } = useCharacter(id)

  const next = () => setId((prev) => prev + 1)
  const prev = () => setId((prev) => (prev > 1 ? prev - 1 : 1))
  const reset = () => setId(1)

  return (
    <div>
      <h2>Characters: </h2>
      {isLoading && <Loading />}
      {hasError && <div>Error loading character.</div>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <img src={data.image} alt={data.name} width={200} />
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
      <button onClick={prev} disabled={id === 1}>Previous</button>
      <button onClick={next}>Next</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}