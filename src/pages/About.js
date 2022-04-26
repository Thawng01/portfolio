import { useRef } from "react";
import useAnimation from "../hook/useAnimation";
import "./about.css";

const About = () => {
    const ref = useRef();
    useAnimation(ref, 500);

    return (
        <div className="about">
            <div ref={ref} className="about-container item">
                <img src="/avatar.png" alt="" className="about-image" />
                <div className="about-info">
                    <h2 className="about-me">ABOUT ME</h2>
                    <p className="about-me-desc">
                        I'm Thawng and MERN stack developer. I love coding and
                        helping others with my skill. Since I have learned
                        coding for 2 years and half, I just started my journey
                        as a freelance. I promise that I would not make you
                        disappointed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
