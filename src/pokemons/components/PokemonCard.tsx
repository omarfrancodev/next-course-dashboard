import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;

    return (
        <div className="flex flex-col m-3 drop-shadow-md drop-shadow-slate-500 rounded-lg hover:scale-105 transition-all duration-150">
            <div className="flex flex-col justify-end items-center min-h-64 rounded-t-lg p-6 bg-[#1b232c] gap-4 text-center">
                <Image
                    className="max-w-[100px] max-h-[100px]"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={100}
                    height={100}
                    alt={name}
                />
                <div className="flex flex-col w-full gap-2">
                    <span className="text-white font-bold text-lg capitalize">{name}</span>
                    <Link
                        href={`/dashboard/pokemon/${id}`}
                        prefetch={true}
                        className="border rounded-full py-2 px-4 font-semibold text-sm text-slate-200 hover:bg-slate-500 cursor-pointer">
                        Más información
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start rounded-b-lg p-3 bg-white">
                <Link href={'/dashboard/main'} className="px-4 py-2 hover:bg-gray-200 flex items-center">
                    <div className="text-red-600">
                        <IoHeartOutline />
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">
                            No es favorito
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
