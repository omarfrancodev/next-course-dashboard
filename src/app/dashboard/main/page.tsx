import { SimpleWidget } from "@/components";

export default function MainPage() {
    return (
        <div className="text-black p-4">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <span className="text-xl">Información general</span>

            <div className="flex flex-wrap p-2">
                <SimpleWidget />
            </div>
        </div>
    );
}