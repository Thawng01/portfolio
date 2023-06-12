import { forwardRef } from "react";
import { motion } from "framer-motion";
import SocialIcon from "../components/SocialIcon";

import avator from "../images/me.jpg";

const Expertises = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Tailwind CSS" },
    { id: 4, name: "Styled-components" },
    { id: 5, name: "JavaScript" },
    { id: 6, name: "React" },
    { id: 7, name: "Node" },
    { id: 8, name: "Express" },
    { id: 9, name: "Mongodb" },
    { id: 10, name: "MySQL" },
];

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="pt-12 pb-6 sm:p-6">
            <div className="flex items-center flex-col md:flex-row md:w-6/7 lg:w-3/4 mx-auto">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="flex w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:mr-2"
                >
                    <img
                        src={avator}
                        alt=""
                        className="rounded-full w-full h-full"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="flex flex-1 flex-col p-3 ml-2 mt-3 md:m-0"
                >
                    <h2 className="dark:text-white text-center md:text-left font-bold mb-2 text-lg">
                        ABOUT ME
                    </h2>
                    <p className="dark:text-light text-md">
                        I'm Thawng and a passionate React developer experienced
                        with NodeJs. I love my job and helping others with my
                        programming skills. I love playing soccer and listening
                        to music.
                    </p>
                    <div className="flex flex-wrap items-center pt-3">
                        <h2 className="font-bold dark:text-white ">
                            Expertise :
                        </h2>
                        {Expertises.map((item) => (
                            <p
                                key={item.id}
                                className="text-dark dark:text-light bg-light dark:bg-lightDark m-1 px-2 py-0.5 rounded-md"
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
            <SocialIcon />
        </section>
    );
});

export default About;
