import { getPokemons, PokemonsGrid, SimplePokemon } from "@/pokemons";


export const metadata = {
    title: 'Pokemons List',
    description: 'Pokemons List',
};


export default async function PokemonsPage() {

    const pokemons: SimplePokemon[] = await getPokemons(150);
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <span className="text-4xl font-bold">Listado de Pokémons <small className="text-red-600">estático</small></span>
            <PokemonsGrid pokemons={pokemons} />
        </div >
    );
}