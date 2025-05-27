"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
    const pokemonsFav = useAppSelector(state => Object.values(state.pokemonsFav.favorites));
    const [pokemons] = useState(pokemonsFav);

    return (
        <>
            {pokemons.length === 0
                ? (<NoFavoritesPage />)
                : (<PokemonsGrid pokemons={pokemons} />)
            }
        </>
    )
}

const NoFavoritesPage = () => {
    return (
        <div className="flex flex-col items-center justify-start h-[50vh] p-4">
            <IoHeartOutline className="text-6xl text-red-600 mb-4" />
            <span className="text-4xl font-bold">No hay Pokémons Favoritos</span>
            <span className="text-lg text-gray-500">Agrega algunos desde la lista de Pokémons</span>
        </div>
    );
}