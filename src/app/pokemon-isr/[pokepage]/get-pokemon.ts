import { PokePage } from "./pokepage"

export const POKEMON_LIMIT = 20

export async function getPokemonList(params: PokePage) {
  const offset = (Number(params.page || '0')) * POKEMON_LIMIT
  const offsetText = offset ? `&offset=${offset}` : ''
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}${offsetText}`,
    {
      next: {
        revalidate: 10
      }
    }
  )

  if (response.ok) {
    return await response.json() as Promise<PokemonListData>
  }
}

export async function getPokemonById(id: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
    {
      next: {
        revalidate: 10
      }
    }
  )

  if (response.ok) {
    return response.json() as Promise<PokemonData>
  }
}