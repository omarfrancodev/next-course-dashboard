"use client"
import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;

    const isFavorite = useAppSelector((state) => !!state.pokemonsFav[id]);
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    };

    return (
        <div className="flex flex-col m-3 drop-shadow-md drop-shadow-slate-400 rounded-lg hover:drop-shadow-lg hover:drop-shadow-slate-700 transition-all duration-150">
            <div className="flex flex-col justify-end items-center min-h-64 rounded-t-lg p-6 bg-[#1b232c] gap-4 text-center">
                <Image
                    className="max-w-[100px] max-h-[100px] hover:scale-125 transition-all duration-150"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={100}
                    height={100}
                    alt={name}
                />
                <div className="flex flex-col w-full gap-2">
                    <span className="text-white font-bold text-lg capitalize">{name}</span>
                    <Link
                        href={`/dashboard/pokemons/${name}`}
                        prefetch={true}
                        className="border rounded-full py-2 px-4 font-semibold text-sm text-slate-200 hover:bg-slate-500 cursor-pointer">
                        Más información
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start rounded-b-lg p-3 bg-white">
                <button
                    onClick={onToggle}
                    className="px-3 py-1 hover:bg-gray-200 flex items-center cursor-pointer">
                    <div className="text-red-600">
                        {isFavorite
                            ? (<IoHeart />)
                            : (<IoHeartOutline />)}
                    </div>
                    <div className="pl-3 text-left">
                        <p className="text-sm font-medium text-gray-800 leading-none">
                            {isFavorite ? "Favorito" : "No es favorito"}
                        </p>
                        <p className="text-xs text-gray-500">Click para cambiar</p>
                    </div>

                </button>
            </div>
        </div>
    )
}
