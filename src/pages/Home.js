import React from "react";
import { motion } from "framer-motion";
import "./home.css";

const Home = ({ onContact }) => {
    return (
        <div className="mt-14 mb-12 pt-20">
            <div className="w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-center">
                <motion.div className="flex flex-col flex-1 mr-2 ">
                    <motion.p
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 0.4 },
                        }}
                        className="font-bold text-xl text-center lg:text-left"
                    >
                        HI, I'M THAWNG
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.4,
                                delay: 0.3,
                                bounceDamping: 20,
                            },
                        }}
                        className="font-bold text-xl text-center lg:text-left"
                    >
                        Fullstack developer
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.4,
                                delay: 0.5,
                                bounceDamping: 20,
                            },
                        }}
                        className="font-serif text-center lg:text-left text-gray-600 text-md my-4"
                    >
                        My aim is to satisfy you with my skills
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            delay: 0.6,
                        }}
                        className="flex justify-center lg:justify-start"
                    >
                        <button
                            className="border border-transparent rounded-3xl bg-sky-600 hover:bg-sky-700 text-white font-serif w-28 p-2"
                            onClick={onContact}
                        >
                            Hire me
                        </button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.4,
                        stiffness: 100,
                    }}
                    className="flex flex-1 hidden lg:block w-96 h-80"
                >
                    <img
                        src="./background.png"
                        alt=""
                        className="w-full h-full"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
