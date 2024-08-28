interface PokemonListData {
  count: number,
  previous: string,
  next: string,
  results: { url: string, name: string }[]
}

interface PokemonData {
  name: string,
  sprites: {
    front_default: string,
  }
}
