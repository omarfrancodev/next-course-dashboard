import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'


interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonsGrid = ({ pokemons }: Props) => {
    return (
        <div className="grid w-full lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 m-4">
            {pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}
