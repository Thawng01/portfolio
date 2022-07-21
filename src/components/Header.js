import { useCallback, useEffect, useRef } from "react";
import "./header.css";
import { MENU } from "../data";

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
        <div className="bg-white fixed w-screen z-10 h-14">
            <div className="flex justify-end items-center h-full mr-8">
                {MENU.map((m, i) => (
                    <ul
                        className=" mx-4 px-3 py-1 rounded-md cursor-pointer hover:bg-sky-600 hover:text-white transition-all duration-500"
                        key={i}
                        onClick={() => onClick(m)}
                    >
                        <li className="font-mono text-md ">{m}</li>
                    </ul>
                ))}

                <div className="dot-container" onClick={handleMenuClick}>
                    <div
                        ref={topRef}
                        className="menu-dot"
                        style={{ backgroundColor: showNav ? "red" : "#fff" }}
                    />
                    <div
                        ref={centerRef}
                        className="menu-dot dot-centered"
                        style={{ backgroundColor: showNav ? "" : "#fff" }}
                    />
                    <div
                        ref={bottomRef}
                        className="menu-dot"
                        style={{ backgroundColor: showNav ? "red" : "#fff" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
