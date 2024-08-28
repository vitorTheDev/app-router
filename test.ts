import { PokePage } from "@/app/pokemon-isr/[pokepage]/pokepage"

const LIMIT = 20

export async function generateStaticParams() {
  const base = await getPokemonList({ page: 0 })
  if (!base?.count) {
    throw new Error('No count for pokemons')
  }
  const pageCount = Math.ceil(base.count / LIMIT)
  const pages: PokePage[] = new Array(pageCount).fill(null)
    .map((_val, idx) => ({ page: idx }))
  if (pages.length) {
    pages[0].firstPage = true
    pages[pages.length - 1].lastPage = true
  }
  return pages
}

async function getPokemonList(params: PokePage) {
  const offset = (params.page ?? 0) * LIMIT
  const offsetText = offset ? `&offset=${offset}` : ''
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}${offsetText}`,
    {
      next: {
        revalidate: 10
      }
    }
  )

  return await response.json() as Promise<PokemonListData>
}
(async () => {
  console.log(JSON.stringify(await generateStaticParams(), null, 2))
})()