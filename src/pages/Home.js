import { useEffect, useRef } from "react";
import "./home.css";

const Home = ({ onContact }) => {
    const ref = useRef();
    const itemRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            itemRef?.current?.classList.add("home-animation");
        }, 100);
    }, []);

    return (
        <div ref={ref} className="home">
            <div ref={itemRef} className="home-info-container">
                <h1 className="home-name">Looking for web developer</h1>
                <p className="home-goal">
                    My aim is to satisfy you with my skills
                </p>
                <button className="home-contact-btn" onClick={onContact}>
                    Contact me
                </button>
            </div>
        </div>
    );
};

export default Home;
