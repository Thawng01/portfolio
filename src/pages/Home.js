import { useEffect, useRef } from "react";
import "./home.css";

const Home = ({ onContact }) => {
    const ref = useRef();

    useEffect(() => {
        setTimeout(() => {
            ref?.current?.classList.add("home-animation");
        }, 100);
    }, []);

    return (
        <div ref={ref} className="home">
            <h1 className="home-name">Looking for web developer</h1>
            <p className="home-goal">My aim is to satisfy you with my skills</p>
            <button className="home-contact-btn" onClick={onContact}>
                Contact me
            </button>
        </div>
    );
};

export default Home;
