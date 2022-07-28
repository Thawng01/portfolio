import React from "react";
import { motion } from "framer-motion";

const ProjectImage2 = ({ image }) => {
    return (
        <motion.div
            initial={{ y: 100, scale: 0 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.2,
            }}
            className="w-full order-1 lg:order-2 lg:w-96 lg:h-80 p-5 flex lg:flex-1 lg:pr-3"
        >
            <img className="" src={image} alt="" />
        </motion.div>
    );
};

export default ProjectImage2;
