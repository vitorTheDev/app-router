import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'

export const pokemonOptions = (pokeid: string) => queryOptions({
  queryKey: ['pokemon', pokeid],
  queryFn: async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)

    return response.json() as Promise<PokemonData>
  },
})

export const pokemonListOptions = infiniteQueryOptions({
  queryKey: ['pokemon'],
  queryFn: (async ({ pageParam }: { pageParam: string | undefined }) => {
    const response = await fetch(pageParam || 'https://pokeapi.co/api/v2/pokemon?limit=20')

    return response.json() as Promise<PokemonListData>
  }),
  initialPageParam: undefined,
  getNextPageParam: (lastPage, _pages) => lastPage.next,
  getPreviousPageParam: (lastPage, _pages) => lastPage.previous,
})