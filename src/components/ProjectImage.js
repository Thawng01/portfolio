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
            transition={{
                duration: 0.6,
                stiffness: 100,
            }}
            className="w-96 h-80 p-5 flex flex-1 mr-3 order-1"
        >
            <img className="" src={image} alt="" />
        </motion.div>
    );
};

export default ProjectImage;
