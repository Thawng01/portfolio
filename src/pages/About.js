import { forwardRef, useRef } from "react";
import useAnimation from "../hook/useAnimation";
import "./about.css";

const About = forwardRef((props, ref) => {
    const containerRef = useRef();
    useAnimation(containerRef, 600);

    return (
        <div ref={ref} className="about">
            <div ref={containerRef} className="about-container">
                <img src="/avatar.png" alt="" className="about-image" />
                <div className="about-info">
                    <h2 className="about-me">ABOUT ME</h2>
                    <p className="about-me-desc">
                        I'm Thawng and MERN stack developer. I love coding and
                        helping others with my skill. Since having learned
                        coding for 2 years and half, and being confident, I just
                        started my journey as a freelance. I promise that I
                        would not make you disappointed.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default About;
