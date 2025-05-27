import { FavoritesPokemons } from "@/pokemons";

export const metadata = {
    title: 'Favorites Pokemons',
    description: 'Favorites Pokemons List',
};


export default function PokemonsPage() {

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <span className="text-4xl font-bold">Pokémons Favoritos <small>Global State</small></span>
            <FavoritesPokemons />
        </div >
    );
}