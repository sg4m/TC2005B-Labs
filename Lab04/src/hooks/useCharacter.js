import { useFetch } from './useFetch'

export const useCharacter = (id) => {
  return useFetch(`https://rickandmortyapi.com/api/character/${id}`)
}