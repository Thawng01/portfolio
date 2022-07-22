import React from "react";
import { motion } from "framer-motion";

const ProjectImage = ({ image, animateValue }) => {
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
            className="w-full lg:w-96 lg:h-80 lg:py-2 px-2 flex lg:flex-1 lg:pr-3"
        >
            <img className="" src={image} alt="" />
        </motion.div>
    );
};

export default ProjectImage;
