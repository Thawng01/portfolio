import { forwardRef } from "react";
import { motion } from "framer-motion";

const Expertises = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Tailwind" },
    { id: 4, name: "Styled-component" },
    { id: 5, name: "JavaScript" },
    { id: 6, name: "React" },
    { id: 7, name: "Node" },
    { id: 8, name: "Express" },
    { id: 9, name: "Mongodb" },
    { id: 9, name: "MySQL" },
];

const About = forwardRef((props, ref) => {
    return (
        <div ref={ref} className=" bg-slate-500 p-6">
            <div className="flex items-center flex-col md:flex-row lg:w-3/4 mx-auto">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 80,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-1 md:mr-2"
                >
                    <img
                        src="/avatar.png"
                        alt=""
                        className="rounded-full w-72"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 150 }}
                    whileInView={{ x: 0 }}
                    transition={{
                        duration: 0.7,
                        type: "spring",
                        stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-1 flex-col p-3 ml-2 mt-3 md:m-0"
                >
                    <h2 className="text-white text-center md:text-left font-bold mb-2 text-lg font-serif">
                        ABOUT ME
                    </h2>
                    <p className="text-md text-gray-100 font-serif">
                        I'm Thawng and a passionate MERN Stack developer and
                        freelance. I love my job and helping others with my
                        skills. I love playing soccer and listening music too.
                    </p>
                    <div className="flex flex-wrap items-center pt-3">
                        <h2 className="font-bold font-serif text-white ">
                            Expertise :
                        </h2>
                        {Expertises.map((item) => (
                            <p
                                key={item.id}
                                className="text-white bg-gray-400 hover:bg-sky-600 m-1 font-serif px-2 py-0.5 rounded-md transition-all duration-500"
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

export default About;
