"use client";

import { JSX } from "react";
import style from "./SidebarMenuItem.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
    const currentPath = usePathname();

    return (
        <Link href={path} className={`${style.link} ${currentPath === path ? style.active : ""}`}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className={style.title}>{title}</span>
                <span className={style.subtitle}>{subtitle}</span>
            </div>
        </Link>
    )
}
