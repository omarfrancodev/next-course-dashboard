import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonState {
    favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonState => {
//     // if (typeof localStorage === "undefined") return {}

//     const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonState = {
    favorites: {}
    // ...getInitialState(),
    // '1': { id: '1', name: 'bulbasaur' },
    // '2': { id: '2', name: 'ivysaur' },
    // '3': { id: '3', name: 'venusaur' },
}


const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setFavoritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        },
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { favorites } = state
            const { id } = pokemon;

            if (!!favorites[id]) {
                delete favorites[id];
            } else {
                favorites[id] = pokemon;
            }

            // localStorage.setItem('favorites-pokemons', JSON.stringify(state));
        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer