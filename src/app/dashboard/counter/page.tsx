import { CartCounter } from "@/app/shopping-cart/components";

export const metadata = {
    title: 'Counter Page',
    description: 'Solo soy un contador de productos',
};

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span> Productos en el carrito: </span>
            <CartCounter value={10} />
        </div>
    );
}