"use client";

import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { useRef } from 'react';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}
