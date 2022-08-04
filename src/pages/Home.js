import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import SocialIcon from "../components/SocialIcon";

import backWebp from "../images/back.webp";
import small_back from "../images/small_back.png";

const Home = forwardRef(({ onContact }, ref) => {
    return (
        <div
            ref={ref}
            className="mt-14 w-full h-screen flex flex-col justify-center py-10"
        >
            <div className=" w-full lg:w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col flex-1 lg:mr-2 p-4 order-2 lg:order-1">
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
                        className="font-bold text-xl text-center lg:text-left"
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
                        className="font-serif text-center lg:text-left text-sky-700 text-md my-3"
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
                    className="flex flex-1 w-68 h-68 lg:w-96 lg:h-96 order-1 lg:order-2"
                >
                    <img
                        srcSet={small_back}
                        src={backWebp}
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
