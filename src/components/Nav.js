import React from "react";

import "./nav.css";
import { MENU } from "../data";

const Nav = ({ visible, onClick }) => {
    return (
        <div className="nav" style={{ right: visible ? 0 : "-100%" }}>
            {MENU.map((m, i) => {
                return (
                    <ul
                        key={i}
                        className="nav-container"
                        onClick={() => onClick(m)}
                    >
                        <li className="nav-item">{m}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default Nav;
