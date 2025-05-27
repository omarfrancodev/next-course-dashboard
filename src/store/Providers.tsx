"use client";

import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { useEffect, useRef } from 'react';
import { setFavoritePokemons } from './pokemons/pokemonsSlice';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
        storeRef.current?.dispatch(setFavoritePokemons(favorites))
    }, []);

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}
