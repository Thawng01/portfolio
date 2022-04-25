import { useEffect, useRef } from "react";
import "./home.css";

const Home = () => {
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
                <h1 className="home-name">Hi, I'm Thawng</h1>
                <h3 className="home-position">Fullstack developer</h3>
                <p className="home-goal">
                    My goal is to satisfy you with my skills
                </p>
                <button className="home-contact-btn">Contact me</button>
            </div>
        </div>
    );
};

export default Home;
