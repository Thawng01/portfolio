import React from "react";
import { motion } from "framer-motion";

const ProjectImage = ({ image }) => {
    return (
        <motion.div
            initial={{ y: 100, scale: 0 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.2,
            }}
            className="w-full lg:w-96 lg:h-80 lg:py-2 px-3 flex lg:flex-1 lg:pr-3"
        >
            <img className="" src={image} alt="" />
        </motion.div>
    );
};

export default ProjectImage;
