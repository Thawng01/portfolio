import React from "react";
import { motion } from "framer-motion";

import "./nav.css";
import { MENU } from "../data";

const Nav = ({ visible, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="nav"
            style={{ right: visible ? 0 : "-100%" }}
        >
            {MENU.map((m, i) => {
                return (
                    <ul
                        key={i}
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
