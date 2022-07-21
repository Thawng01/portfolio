import React from "react";

import "./work.css";
import ProjectImage from "../components/ProjectImage";
import ProjectDesc from "../components/ProjectDesc";
import ProjectWrapper from "../components/ProjectWrapper";

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
                    line1="Social media created using the very popular Javascript library
                        called React for frontend and firebase for backend and database."
                    line2="And also Redux is used for state management, material icon and
                        react-icons are also used for icons in this project. And
                        react-dom-router is used for navigation."
                />
            </ProjectWrapper>
            <ProjectWrapper>
                <ProjectDesc
                    animateValue={-150}
                    title="News App"
                    link="https://news-ui.netlify.app/"
                    line1="One of the most popular Javascript library called React is used for this project. Redux is used for state management."
                    line2="I use axios package for fetching json data from news.org api."
                />
                <ProjectImage image="./news.jpg" animateValue={150} />
            </ProjectWrapper>
        </div>
    );
};

export default Work;
