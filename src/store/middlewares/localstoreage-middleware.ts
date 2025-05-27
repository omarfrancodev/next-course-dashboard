import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        // Check if the action is related to favorites
        if (action.type === 'pokemons/toggleFavorite') {
            const { pokemonsFav } = state.getState() as RootState;
            localStorage.setItem('favorites-pokemons', JSON.stringify(pokemonsFav));
            return;
        }
    };
}