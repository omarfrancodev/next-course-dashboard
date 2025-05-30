import { CartCounter } from "@/shopping-cart/components";

export const metadata = {
    title: 'Counter Page',
    description: 'Solo soy un contador de productos',
};

export default function CounterPage() {

    return (
        <div className="p-4 flex flex-col items-center justify-center w-full h-full">
            <span> Productos en el carrito: </span>
            <CartCounter value={10} />
        </div>
    );
}