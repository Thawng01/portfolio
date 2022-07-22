import React from "react";
import { BsGithub, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectDesc2 = ({ title, link, gitLink, line1, line2, animateValue }) => {
    return (
        <motion.div
            initial={{ x: animateValue, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" flex lg:flex-1 flex-col p-6 sm:p-5 order-2 lg:order-1"
        >
            <motion.p
                initial={{
                    x: animateValue,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-bold font-serif text-lg mb-3"
            >
                {title}
            </motion.p>
            <motion.p
                initial={{
                    x: animateValue,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif pb-2 text-md text-gray-500"
            >
                {line1}
            </motion.p>
            <motion.p
                initial={{
                    x: animateValue,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-md text-gray-500"
            >
                {line2}
            </motion.p>

            <motion.div
                initial={{
                    x: animateValue,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center mt-4"
            >
                <a
                    href={gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200"
                >
                    <BsGithub />
                    <p href="/"></p>
                </a>
                <a
                    className="flex items-center ml-3"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="px-2 py-1 bg-sky-600 rounded-md text-white">
                        Demo
                    </p>
                    <BsArrowRightShort className="text-xl text-gray-500" />
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDesc2;
