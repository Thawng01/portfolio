import React, { useState } from "react";
import { BsGithub, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectDesc2 = ({ title, link, gitLink, line1, line2 }) => {
    const [visible, setVisible] = useState(false);

    const handleReadMore = () => setVisible(!visible);

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.7,
                delay: 0.1,
            }}
            className=" flex lg:flex-1 flex-col p-6 md:p-5 order-2 lg:order-1"
        >
            <p className="dark:text-white font-bold text-lg mb-3">{title}</p>
            <p className="dark:text-light pb-2">
                {line1}{" "}
                <span
                    className="text-primary sm:hidden"
                    onClick={handleReadMore}
                >
                    {visible ? "" : "More..."}
                </span>
            </p>
            <p
                className={`${
                    visible ? "block" : "hidden"
                } dark:text-light sm:block`}
            >
                {line2}{" "}
                <span
                    className="text-primary sm:hidden"
                    onClick={handleReadMore}
                >
                    {visible ? "Less" : ""}
                </span>
            </p>

            <div className="flex items-center mt-4">
                <a
                    href={gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-light dark:bg-lightDark"
                >
                    <BsGithub className="text-lightDark dark:text-white text-md" />
                </a>
                <a
                    className="flex items-center ml-3"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="px-2 py-1 bg-primary hover:bg-sky-700 rounded-md text-white text-md">
                        Demo
                    </p>
                    <BsArrowRightShort className="text-xl dark:text-light text-lightDark" />
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectDesc2;
