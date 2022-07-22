import React from "react";
import { motion } from "framer-motion";

const ProjectImage2 = ({ image, animateValue }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: animateValue,
                scale: 0,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                stiffness: 100,
            }}
            className="w-full order-1 lg:order-2 lg:w-96 lg:h-80 p-5 flex lg:flex-1 lg:pr-3"
        >
            <img className="" src={image} alt="" />
        </motion.div>
    );
};

export default ProjectImage2;
