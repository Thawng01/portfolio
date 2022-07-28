import React from "react";
import { motion } from "framer-motion";

import "./nav.css";
const MENU = ["Home", "Projects", "About", "Service", "Contact"];

const Nav = ({ visible, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="nav"
            style={{ right: visible ? 0 : "-100%" }}
        >
            {MENU.map((m) => {
                return (
                    <ul
                        key={m}
                        className="list-none my-3   cursor-pointer"
                        onClick={() => onClick(m)}
                    >
                        <li className="font-serif text-md text-black px-4 py-2 rounded-md transition-all duration-500 hover:bg-sky-600 hover:text-white">
                            {m}
                        </li>
                    </ul>
                );
            })}
        </motion.div>
    );
};

export default Nav;
