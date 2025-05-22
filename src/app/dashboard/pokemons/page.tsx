import { getPokemons, PokemonsGrid, SimplePokemon } from "@/pokemons";


export const metadata = {
    title: 'Pokemons List',
    description: 'Pokemons List',
};


export default async function PokemonsPage() {

    const pokemons: SimplePokemon[] = await getPokemons(200);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <span className="text-4xl font-bold">Listado de Pokémons <small>estático</small></span>
            <PokemonsGrid pokemons={pokemons} />
        </div >
    );
}