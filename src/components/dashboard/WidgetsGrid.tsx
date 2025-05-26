"use client"

import { FaCartShopping } from 'react-icons/fa6'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
    const count = useAppSelector((state) => state.counter.count);
    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                title={count.toString()}
                subtitle="Productos en carrito"
                label="Contador de Carrito"
                icon={<FaCartShopping size={40} />}
                href="/dashboard/counter"
            />
        </div>
    )
}
