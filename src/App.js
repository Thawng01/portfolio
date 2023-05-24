import React, { useCallback, useContext, useEffect, useRef } from "react";

import "./App.css";
import { Context } from "./context/Context";
import BottomNav from "./components/BottomNav";
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Work = React.lazy(() => import("./pages/Work"));
const Service = React.lazy(() => import("./pages/Service"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
    const { setPosition } = useContext(Context);

    const homeRef = useRef();
    const contactRef = useRef();
    const aboutRef = useRef();
    const workRef = useRef();
    const serviceRef = useRef();

    const handleScroll = useCallback(() => {
        setPosition(window.scrollY);
    }, [setPosition]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleContact = () => {
        window.scrollTo({
            top: contactRef?.current?.offsetTop,
            behavior: "smooth",
        });
    };

    const handleNavigation = (item) => {
        if (item === "Home") {
            runAnimation(homeRef);
        }
        if (item === "About") {
            runAnimation(aboutRef);
        }

        if (item === "Projects") {
            runAnimation(workRef);
        }

        if (item === "Contact") {
            runAnimation(contactRef);
        }

        if (item === "Service") {
            runAnimation(serviceRef);
        }
    };

    function runAnimation(myRef) {
        window.scrollTo({
            top: myRef?.current?.offsetTop - 65,
            behavior: "smooth",
        });
    }

    return (
        <div className="app">
            <Header onClick={handleNavigation} />
            <Home onContact={handleContact} />
            <Work ref={workRef} />
            <About ref={aboutRef} />
            <Service ref={serviceRef} />
            <Contact ref={contactRef} />
            <BottomNav onClick={handleNavigation} />
        </div>
    );
}

export default App;
