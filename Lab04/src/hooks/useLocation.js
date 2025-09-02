import { useFetch } from './useFetch'

export const useLocation = (id) => {
  return useFetch(`https://rickandmortyapi.com/api/location/${id}`)
}