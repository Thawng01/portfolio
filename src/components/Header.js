import { useRef, useState } from "react";
import "./header.css";
import Nav from "./Nav";
import { MENU } from "../data";

const Header = ({ onClick }) => {
    const [showNav, setShowNav] = useState(false);

    const topRef = useRef();
    const centerRef = useRef();
    const bottomRef = useRef();

    const handleMenuClick = () => {
        if (centerRef?.current?.classList.contains("hide-dot-centered")) {
            centerRef?.current?.classList.remove("hide-dot-centered");
            topRef?.current?.classList.remove("animate-dot-top");
            bottomRef?.current?.classList.remove("animate-dot-bottom");
            setShowNav(false);
        } else {
            setShowNav(true);
            centerRef?.current?.classList.add("hide-dot-centered");
            topRef?.current?.classList.add("animate-dot-top");
            bottomRef?.current?.classList.add("animate-dot-bottom");
        }
    };

    return (
        <div className="header">
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
                    style={{ backgroundColor: showNav ? "red" : "#000" }}
                />
                <div
                    ref={centerRef}
                    className="menu-dot dot-centered"
                    style={{ backgroundColor: showNav ? "" : "#000" }}
                />
                <div
                    ref={bottomRef}
                    className="menu-dot"
                    style={{ backgroundColor: showNav ? "red" : "#000" }}
                />
            </div>

            <Nav visible={showNav} />
        </div>
    );
};

export default Header;
