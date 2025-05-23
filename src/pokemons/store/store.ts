import { PokemonsResponse, SimplePokemon } from "..";

export const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
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

    return pokemons;
}