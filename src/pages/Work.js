import React from "react";

import "./work.css";
import ProjectImage from "../components/ProjectImage";
import ProjectDesc from "../components/ProjectDesc";
import ProjectWrapper from "../components/ProjectWrapper";
import ProjectImage2 from "../components/ProjectImage2";
import ProjectDesc2 from "../components/ProjectDesc2";

const Work = () => {
    return (
        <div>
            <p className="text-center font-serif text-lg font-bold">
                My Recent Work
            </p>
            <ProjectWrapper>
                <ProjectImage image="./social.jpg" animateValue={-150} />

                <ProjectDesc
                    animateValue={150}
                    title="Social Media"
                    link="https://thawng01.github.io/chinaw-web/"
                    gitLink="https://github.com/Thawng01/chinaw-web"
                    line1="Social media created using the very popular Javascript library
                        called React for frontend and firebase for backend and database."
                    line2="And also Redux is used for state management, material icon and
                        react-icons are also used for icons in this project. And
                        react-dom-router is used for navigation."
                />
            </ProjectWrapper>
            <ProjectWrapper>
                <ProjectDesc2
                    animateValue={-150}
                    title="News App"
                    link="https://news-ui.netlify.app/"
                    gitLink="https://github.com/Thawng01/news"
                    line1="One of the most popular Javascript library called React is used for this project. Redux is used for state management."
                    line2="I use axios package for fetching json data from news.org api."
                />
                <ProjectImage2 image="./news.jpg" animateValue={150} />
            </ProjectWrapper>

            <ProjectWrapper>
                <ProjectImage image="./instas.png" animateValue={-150} />
                <ProjectDesc
                    animateValue={150}
                    title="Instagram Clone"
                    link="https://insta-clone-ui.netlify.app/"
                    gitLink="https://github.com/Thawng01/instagram_ui"
                    line1="In this Instagram clone project, I use React for frontend, styled-component for styling, framer-motion for some animation, backend for node express and database for mongodb."
                    line2="For uploading image file, cloudinary and multer are used. Others popular package are alse used in this project."
                />
            </ProjectWrapper>
        </div>
    );
};

export default Work;
