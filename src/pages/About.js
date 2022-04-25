import { useRef } from "react";
import useAnimation from "../hook/useAnimation";
import "./about.css";

const About = () => {
    const ref = useRef();
    useAnimation(ref, 500);

    return (
        <div className="about">
            <div ref={ref} className="about-container item">
                <img src="/background.jpg" alt="" className="about-image" />
                <div className="about-info">
                    <h2 className="about-me">ABOUT ME</h2>
                    <p className="about-me-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo maxime, tempore enim nostrum odio officiis facere ut
                        vero? Iure aspernatur neque distinctio aperiam fuga,
                        laboriosam aliquam odio nemo perferendis cupiditate!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
