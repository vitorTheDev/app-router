import PokemonList from "../PokemonList"
import { getPokemonList, POKEMON_LIMIT } from "./get-pokemon"
import { PokePage } from "./pokepage"

export async function generateStaticParams() {
  const base = await getPokemonList({ page: '0' })
  if (!base?.count) {
    throw new Error('No count for pokemons')
  }
  const pageCount = Math.ceil(base.count / POKEMON_LIMIT)
  const pages: PokePage[] = new Array(pageCount).fill(null)
    .map((_val, idx) => ({ page: idx.toString() }))
  return pages
}

export default async function PokemonIsr({ params }: { params: { pokepage: string } }) {
  const list = await getPokemonList({ page: params.pokepage })

  return <PokemonList
    list={list} page={params.pokepage}
  />
}