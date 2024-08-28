import Image from 'next/image'
import { getPokemonById, getPokemonList } from '../../[pokepage]/get-pokemon'
import BackButton from '@/app/components/button/BackButton'

export async function generateStaticParams() {
  const base = await getPokemonList({ page: '0' })
  if (!base?.count) {
    throw new Error('No count for pokemons')
  }
  return new Array(base.count).fill(null).map((_v, idx) => ({ pokeid: (idx + 1).toString() }))
}

export default async function PokemonInfo({ params: { pokeid } }: { params: { pokeid: string } }) {
  const data = await getPokemonById(pokeid)

  return (
    <div>
      <figure>
        {data?.sprites?.front_default && <Image src={data.sprites.front_default} height={200} width={150} alt={data.name} />}
        <h2>I&apos;m {data?.name}</h2>
      </figure>
      <BackButton>Voltar</BackButton>
    </div>
  )
}
