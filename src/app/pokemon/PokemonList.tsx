'use client'

import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { pokemonListOptions } from "./pokemon"
import Link from "next/link"
import "./PokemonList.css"

export default function PokemonList() {
  const {
    data, isPending, isError, error,
    hasNextPage, fetchNextPage,
    hasPreviousPage, fetchPreviousPage,
  } = useSuspenseInfiniteQuery(pokemonListOptions)
  console.log(data.pageParams)
  const next = () => {
    fetchNextPage()
  }
  const previous = () => {
    fetchPreviousPage()
  }

  if (isError) {
    return <>Error: {error?.message}</>
  }
  if (isPending) {
    return <>Loading...</>
  }
  return <>
    <div className="flex flex-row gap-4">
      {hasPreviousPage && <div className="underline cursor-pointer" onClick={previous}>Previous</div>}
      {hasNextPage && <div className="underline cursor-pointer" onClick={next}>Next</div>}
    </div>
    <div className="poke-grid">
      {data?.pages?.at(data.pages?.length - 1)?.results.map(pokemon =>
        <Link href={`pokemon/${pokemon.name}`} key={pokemon.name} className="text-center text-wrap">
          {pokemon.name}
        </Link>)}
    </div>
  </>
}
