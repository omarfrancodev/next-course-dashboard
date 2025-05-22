import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
    title: 'Pokemons List',
    description: 'Pokemons List',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const dataResponse: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
        cache: 'force-cache',
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json());

    const pokemons: SimplePokemon[] = dataResponse.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    // throw new Error('Error al obtener los pokemons');

    return pokemons;
}


export default async function PokemonsPage() {

    const pokemons: SimplePokemon[] = await getPokemons(200);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <span className="text-4xl font-bold">Listado de Pokémons <small>estático</small></span>
            <PokemonsGrid pokemons={pokemons} />
        </div >
    );
}