import { useCallback, useEffect, useRef } from "react";
import "./header.css";

const MENU = ["Contact", "Service", "About", "Projects", "Home"];

const Header = ({ onClick, showNav, onShowNav }) => {
    const topRef = useRef();
    const centerRef = useRef();
    const bottomRef = useRef();

    const toggleMenu = useCallback(() => {
        if (
            centerRef?.current?.classList.contains("hide-dot-centered") ||
            !showNav
        ) {
            centerRef?.current?.classList.remove("hide-dot-centered");
            topRef?.current?.classList.remove("animate-dot-top");
            bottomRef?.current?.classList.remove("animate-dot-bottom");
        } else {
            centerRef?.current?.classList.add("hide-dot-centered");
            topRef?.current?.classList.add("animate-dot-top");
            bottomRef?.current?.classList.add("animate-dot-bottom");
        }
    }, [showNav]);

    const handleMenuClick = () => {
        onShowNav();
        toggleMenu();
    };

    useEffect(() => {
        toggleMenu();
    }, [showNav, toggleMenu]);

    return (
        <div className="bg-white fixed w-screen z-40 h-14">
            <div className="flex justify-end items-center h-full pr-8">
                <div className=" hidden md:flex">
                    {MENU.map((m) => (
                        <ul
                            className=" mx-4 px-3 py-1 rounded-md cursor-pointer hover:bg-sky-600 hover:text-white transition-all duration-500"
                            key={m}
                            onClick={() => onClick(m)}
                        >
                            <li className="font-serif text-md ">{m}</li>
                        </ul>
                    ))}
                </div>

                <div
                    className="cursor-pointer block md:hidden"
                    onClick={handleMenuClick}
                >
                    <div
                        ref={topRef}
                        className="bg-sky-600 h-1 w-7 my-1 rounded-md transition-all duration-500"
                    />
                    <div
                        ref={centerRef}
                        className="bg-sky-600 h-1 w-7 my-1 rounded-md transition-all duration-500"
                    />
                    <div
                        ref={bottomRef}
                        className="bg-sky-600 h-1 w-7 my-1 rounded-md transition-all duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
