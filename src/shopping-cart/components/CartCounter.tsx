"use client";

import React, { useState } from 'react'

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
    const [count, setCount] = useState(value);

    return (
        <>
            <span id="counterText" className="text-7xl font-bold">{count}</span>

            <div className="flex">
                <button
                    className="middle none cursor-pointer center mr-3 rounded-xl bg-blue-500 hover:bg-blue-400 py-3 px-6 font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    onClick={() => setCount(count + 1)}
                >
                    +1
                </button>
                <button
                    className="middle none cursor-pointer center mr-3 rounded-xl bg-blue-500 hover:bg-blue-400 py-3 px-6 font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    onClick={() => setCount(count - 1)}
                >
                    -1
                </button>
            </div>
        </>
    )
}
