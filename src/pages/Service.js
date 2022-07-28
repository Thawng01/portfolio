import React, { forwardRef } from "react";
import { MdDevices } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Service = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-gray-200 p-2">
            <motion.h2
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                }}
                className="font-bold font-serif text-center text-lg py-3"
            >
                SERVICE
            </motion.h2>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.1,
                    }}
                    className="p-3 flex flex-col flex-1"
                >
                    <div className="bg-white flex items-center justify-center mx-auto w-40 h-40 rounded-full">
                        <MdDevices className="text-xxxl text-sky-600" />
                    </div>
                    <div className="py-3 px-1 w-full sm:w-2/3 mx-auto">
                        <h2 className="font-bold text-lg text-center font-serif">
                            Responsive
                        </h2>
                        <p className="font-serif text-md text-center">
                            No matter how big or small your device is! My layout
                            will look good and easy to use on every device.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                    }}
                    className="p-3 flex flex-col flex-1"
                >
                    <div className="bg-sky-600 flex items-center justify-center mx-auto w-40 h-40 rounded-full">
                        <IoRocketOutline className="text-xxxl text-white" />
                    </div>
                    <div className="py-3 px-1 w-full sm:w-2/3 mx-auto">
                        <h2 className="font-bold text-lg text-center font-serif">
                            Dynamic
                        </h2>
                        <p className="font-serif text-md text-center">
                            Website don't have to static, I love making pages
                            come to life.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

export default Service;
