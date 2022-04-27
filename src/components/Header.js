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
        <div className="header">
            <p className="header-title">Thawng</p>
            <div className="header-info-container">
                {MENU.map((m, i) => (
                    <ul
                        key={i}
                        className="menu-container"
                        onClick={() => onClick(m)}
                    >
                        <li className="menu-item">{m}</li>
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
