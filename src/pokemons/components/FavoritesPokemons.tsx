"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";

export const FavoritesPokemons = () => {
    const pokemonsFav = useAppSelector(state => Object.values(state.pokemonsFav));
    return (
        <>
            <PokemonsGrid pokemons={pokemonsFav} />
        </>
    )
}
