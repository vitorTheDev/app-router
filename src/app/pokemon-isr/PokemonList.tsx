import Link from "next/link"
import "./PokemonList.css"
import { PokePage } from "./[pokepage]/pokepage"

export default function PokemonList({ list, page, }: PokePage & { list: PokemonListData }) {
  return <>
    <div className="flex flex-row gap-4">
      {list.previous && <Link className="underline cursor-pointer" href={`/pokemon-isr/${Number(page) - 1}`}>Previous</Link>}
      {list.next && <Link className="underline cursor-pointer" href={`/pokemon-isr/${Number(page) + 1}`}>Next</Link>}
    </div>
    <div className="poke-grid">
      {list?.results?.length && list?.results.map(pokemon =>
        <Link href={`pokemon/${pokemon.name}`} key={pokemon.name} className="text-center text-wrap">
          {pokemon.name}
        </Link>)}
    </div>
  </>
}
