"use client";

import { useAppDispatch, useAppSelector } from '@/store';
import { decreaseCount, increaseCount, setIsReady } from '@/store/counter/counterSlice';
import React, { useEffect } from 'react'

interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then((res) => res.json());

    return data;
}

export const CartCounter = ({ value = 0 }: Props) => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(setIsReady(value))
    // }, [dispatch, value]);

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(setIsReady(count)))
    }, [dispatch])

    return (
        <>
            <span id="counterText" className="text-7xl font-bold">{count}</span>

            <div className="flex">
                <button
                    className="middle none cursor-pointer center mr-3 rounded-xl bg-blue-500 hover:bg-blue-400 py-3 px-6 font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    onClick={() => dispatch(increaseCount())}
                >
                    +1
                </button>
                <button
                    className="middle none cursor-pointer center mr-3 rounded-xl bg-blue-500 hover:bg-blue-400 py-3 px-6 font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    onClick={() => dispatch(decreaseCount())}
                >
                    -1
                </button>
            </div>
        </>
    )
}
