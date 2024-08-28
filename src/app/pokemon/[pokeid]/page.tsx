'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { pokemonOptions } from '../pokemon'
import Image from 'next/image'

export default function PokemonInfo({ params: { pokeid } }: { params: { pokeid: string } }) {
  const { data, isPending } = useQuery(pokemonOptions(pokeid))

  if (isPending) {
    return <>Loading...</>
  }
  return (
    <div>
      <figure>
        <Image src={data!.sprites.front_default} height={200} width={150} alt={data!.name} />
        <h2>I&apos;m {data!.name}</h2>
      </figure>
    </div>
  )
}
