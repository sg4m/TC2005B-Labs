import { useFetch } from './useFetch'

export const useEpisode = (id) => {
  return useFetch(`https://rickandmortyapi.com/api/episode/${id}`)
}