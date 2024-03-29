import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import ProjectImage from "../components/ProjectImage";
import ProjectDesc from "../components/ProjectDesc";
import ProjectWrapper from "../components/ProjectWrapper";
import ProjectImage2 from "../components/ProjectImage2";
import ProjectDesc2 from "../components/ProjectDesc2";

import instas from "../images/instas.png";
import instasWebp from "../images/instas.webp";
import news from "../images/news.jpg";
import newsWebp from "../images/news.webp";
import social from "../images/social.jpg";
import socialWebp from "../images/social.webp";
import small_news from "../images/small_news.jpg";
import small_instas from "../images/small_instas.png";
import small_social from "../images/small_social.jpg";

const Work = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref}>
            <motion.h2
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
                className="dark:text-white text-center py-5 text-lg font-bold"
            >
                MY PROJECTS
            </motion.h2>
            <ProjectWrapper>
                <ProjectImage
                    image={social}
                    imgWeb={socialWebp}
                    smallImage={small_social}
                />

                <ProjectDesc
                    title="Mini Social Media"
                    link="https://thawng01.github.io/chinaw-web/"
                    gitLink="https://github.com/Thawng01/chinaw-web"
                    line1="This mini Social media created using the very popular Javascript library
                        called React for frontend and firebase for backend and database."
                    line2="And also Redux is used for state management, material icon and
                        react-icons are also used for icons in this project. And
                        react-dom-router is used for navigation."
                />
            </ProjectWrapper>
            <ProjectWrapper>
                <ProjectDesc2
                    title="News App"
                    link="https://news-ui.netlify.app/"
                    gitLink="https://github.com/Thawng01/news"
                    line1="One of the most popular Javascript library called React is used for this project. Redux is used for state management."
                    line2="I use axios package for fetching json data from news.org api."
                />
                <ProjectImage2
                    image={news}
                    imgWeb={newsWebp}
                    smallImage={small_news}
                />
            </ProjectWrapper>

            <ProjectWrapper>
                <ProjectImage
                    image={instas}
                    imgWeb={instasWebp}
                    smallImage={small_instas}
                />
                <ProjectDesc
                    title="Instagram Clone"
                    link="https://insta-clone-ui.netlify.app/"
                    gitLink="https://github.com/Thawng01/instagram_ui"
                    line1="In this Instagram clone project, I use React for frontend, styled-component for styling, framer-motion for some animation, backend for node express and database for mongodb."
                    line2="For uploading image file, cloudinary and multer are used. Others popular package are also used in this project."
                />
            </ProjectWrapper>
        </section>
    );
});

export default Work;
