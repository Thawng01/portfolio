import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import SocialIcon from "../components/SocialIcon";

const Home = forwardRef(({ onContact }, ref) => {
    return (
        <div
            ref={ref}
            className="mt-14 w-full h-screen flex flex-col justify-center pb-10"
        >
            <div className=" w-full lg:w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col flex-1 lg:mr-2 p-4 ">
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            stiffness: 100,
                            type: "spring",
                        }}
                        className="font-bold text-xl text-center lg:text-left"
                    >
                        HI, I'M THAWNG
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3,
                            stiffness: 100,
                            type: "spring",
                        }}
                        className="font-bold text-xl my-1 text-center lg:text-left"
                    >
                        Fullstack developer
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.3,
                                delay: 0.5,
                            },
                        }}
                        className="font-serif text-center lg:text-left text-gray-600 text-md my-4"
                    >
                        My aim is to satisfy you with my skills
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            delay: 0.6,
                        }}
                        className="flex justify-center mt-2 lg:justify-start"
                    >
                        <button
                            className="border border-transparent rounded-3xl bg-sky-600 hover:bg-sky-700 text-white text-md font-serif w-28 p-2"
                            onClick={onContact}
                        >
                            Hire me
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 0.1,
                        duration: 0.4,
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
            <SocialIcon />
        </div>
    );
});

export default Home;
