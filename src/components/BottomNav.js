import React from "react";

import { MENU } from "../data";
import useScroll from "../hook/useScroll";

const BottomNav = ({ onClick }) => {
    const activeClass = useScroll();
    return (
        <nav className="flex items-center w-full h-[60px] bg-white dark:bg-dark fixed md:hidden border-t border-light dark:border-lightDark bottom-0 left-0 z-40">
            <ul className="flex justify-evenly w-full">
                {MENU.map((m) => {
                    return (
                        <li
                            key={m.id}
                            className={`flex flex-col items-center`}
                            onClick={() => onClick(m.title)}
                        >
                            <div
                                className={`absolute top-0 h-[2px] w-[50px] rounded-sm transition-all duration-500 ${
                                    activeClass === m.title ? "bg-primary" : ""
                                }`}
                            />

                            <span className={`dark:text-white`}>{m.icon}</span>
                            <p
                                className={`text-sm dark:text-white transition-all duration-300`}
                            >
                                {m.title}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BottomNav;
