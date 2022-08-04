import React from "react";
import { motion } from "framer-motion";

import Image from "./Image";

const ProjectImage = ({ image, imgWeb, smallImage }) => {
    return (
        <motion.div
            initial={{ y: 100, scale: 0 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.2,
            }}
            className="w-full h-auto lg:py-2 px-3 flex lg:flex-1 lg:pr-3"
        >
            <Image img={image} imgWebp={imgWeb} smallImage={smallImage} />
        </motion.div>
    );
};

export default ProjectImage;
