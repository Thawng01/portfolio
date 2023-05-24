import React from "react";
import { motion } from "framer-motion";

import Image from "./Image";

const ProjectImage = ({ image, imgWeb, smallImage }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
            }}
            className="w-full h-auto justify-center lg:py-2 px-3 flex lg:flex-1 lg:pr-3"
        >
            <Image img={image} imgWebp={imgWeb} smallImage={smallImage} />
        </motion.div>
    );
};

export default ProjectImage;
