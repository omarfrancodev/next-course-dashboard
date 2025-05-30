import { getPokemons, Pokemon, SimplePokemon } from "@/pokemons";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ name: string }>;
}


export async function generateStaticParams() {
    const pokemons: SimplePokemon[] = await getPokemons(100);

    return pokemons.map((pokemon) => ({
        name: pokemon.name,
    }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    try {
        const params = await props.params;

        const pokemon: Pokemon = await getPokemon(params.name);

        const { id, name } = pokemon;

        return {
            title: `Pokemon #${id} - ${name}`,
            description: `Página del Pokémon ${name}`,
        }
    } catch (error) {
        console.error(error);
        return {
            title: 'Pokemon Page',
            description: 'Pagina del Pokémon',
        }
    }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
    const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,
        {
            cache: "default",
            next: {
                revalidate: 60
            }
        }
    ).then(res => res.json())
        .catch(() => notFound());

    return pokemon;
}

export default async function PokemonPage(props: Props) {
    const params = await props.params;
    const name = String(params.name);

    const pokemon: Pokemon = await getPokemon(name);


    return (
        <div className="flex flex-col items-center text-slate-800 m-4">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                        #{pokemon.id} {pokemon.name}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                            width={150}
                            height={150}
                            alt={`Imagen del pokemon ${pokemon.name}`}
                            className="mb-5"
                        />


                        <span className="text-lg font-semibold">Moves</span>
                        <div className="flex flex-wrap">
                            {
                                pokemon.moves.map(move => (
                                    <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Types</p>
                        <div className="text-base font-medium text-navy-700 flex">
                            {
                                pokemon.types.map(type => (
                                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Peso</p>
                        <span className="text-base font-medium text-navy-700 flex">
                            {
                                pokemon.weight
                            }
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Regular Sprites</p>
                        <div className="flex justify-center">

                            <Image
                                src={pokemon.sprites.front_default}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />

                            <Image
                                src={pokemon.sprites.back_default}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />

                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Shiny Sprites</p>
                        <div className="flex justify-center">

                            <Image
                                src={pokemon.sprites.front_shiny}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />

                            <Image
                                src={pokemon.sprites.back_shiny}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}