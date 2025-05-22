import { redirect } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}


export default async function PokemonPage(props: Props) {
    const params = await props.params;

    redirect(`/dashboard/pokemons/${params.id}`)
}