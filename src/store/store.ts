import { configureStore, Middleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';
import { localStorageMiddleware } from './middlewares/localstoreage-middleware';

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            pokemonsFav: pokemonsReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(localStorageMiddleware as Middleware)
    })

}
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']