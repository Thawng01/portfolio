import React, { useRef, useState } from "react";

import "./App.css";
import BottomNav from "./components/BottomNav";
import DarkMode from "./components/DarkMode";
import ArrowUpBtb from "./components/ArrowUpBtb";
import useScroll from "./hook/useScroll";

const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Work = React.lazy(() => import("./pages/Work"));
const Service = React.lazy(() => import("./pages/Service"));
const Contact = React.lazy(() => import("./pages/Contact"));

const theme = localStorage.getItem("theme");

function App() {
    const [isDark, setIsDark] = useState(theme === "dark" ? true : false);

    const homeRef = useRef();
    const contactRef = useRef();
    const aboutRef = useRef();
    const workRef = useRef();
    const serviceRef = useRef();

    useScroll();

    const handleToggle = () => setIsDark((prev) => !prev);

    const handleContact = () => {
        window.scrollTo({
            top: contactRef?.current?.offsetTop - 65,
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
        <div className="app bg-white dark:bg-dark">
            <DarkMode isDark={isDark} onToggle={handleToggle} />
            <Header onClick={handleNavigation} />
            <Home ref={homeRef} onContact={handleContact} />
            <Work ref={workRef} />
            <Service ref={serviceRef} />
            <About ref={aboutRef} />
            <Contact ref={contactRef} />
            <BottomNav onClick={handleNavigation} />
            <ArrowUpBtb />
        </div>
    );
}

export default App;
