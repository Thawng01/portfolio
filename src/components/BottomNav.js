import React from "react";

import { MENU } from "../data";

const BottomNav = ({ onClick }) => {
    return (
        <ul className="bg-white dark:bg-dark fixed flex w-full h-[60px] items-center justify-evenly md:hidden border-t border-light dark:border-lightDark bottom-0 left-0 z-40">
            {MENU.map((m) => {
                return (
                    <li
                        key={m.id}
                        className={`flex flex-col items-center`}
                        onClick={() => onClick(m.title)}
                    >
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
    );
};

export default BottomNav;
