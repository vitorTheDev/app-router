import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { pokemonListOptions } from './pokemon'
import { getQueryClient } from '../query-client'
import PokemonList from './PokemonList'


export default async function Pokemon() {
  const queryClient = getQueryClient()

  queryClient.prefetchInfiniteQuery(pokemonListOptions)

  return (
    <main>
      <h1>Pokemon Info</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonList />
      </HydrationBoundary>
    </main>
  )
}
