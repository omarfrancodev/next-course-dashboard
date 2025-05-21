import Image from "next/image"
import { FaCalculator, FaReact } from "react-icons/fa6"
import { IoBrowsersOutline } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem/SidebarMenuItem"


const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoBrowsersOutline width={40} height={40} />,
        title: "Dashboard",
        subtitle: "Data Overview"
    },
    {
        path: "/dashboard/counter",
        icon: <FaCalculator width={40} height={40} />,
        title: "Counter",
        subtitle: "Estado local"
    }
]

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[350px] left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <FaReact className="mr-2" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                            width={32}
                            height={32}
                            alt="User Avatar" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Omar Franco
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {
                    menuItems.map((item, index) => (
                        <SidebarMenuItem key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}
