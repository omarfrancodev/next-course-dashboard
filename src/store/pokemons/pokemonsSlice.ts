import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonState {
    [key: string]: SimplePokemon
}


const initialState: PokemonState = {
    // '1': { id: '1', name: 'bulbasaur' },
    // '2': { id: '2', name: 'ivysaur' },
    // '3': { id: '3', name: 'venusaur' },
}

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state[id]) {
                delete state[id];
            } else {
                state[id] = pokemon;
            }
        }
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer