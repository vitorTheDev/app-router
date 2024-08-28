import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { pokemonOptions } from './pokemon'
import { getQueryClient } from '../query-client'
import { PokemonInfo } from './pokemon-info'


export default function Pokemon() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(pokemonOptions)

  return (
    <main>
      <h1>Pokemon Info</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonInfo />
      </HydrationBoundary>
    </main>
  )
}
