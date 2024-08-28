'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { pokemonOptions } from './pokemon'
import Image from 'next/image'

export function PokemonInfo() {
  const { data } = useSuspenseQuery(pokemonOptions)

  return (
    <div>
      <figure>
        <Image src={data.sprites.front_shiny} height={200} alt={data.name} />
        <h2>I&apos;m {data.name}</h2>
      </figure>
    </div>
  )
}
