import { useCallback, useContext, useEffect, useRef, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import { Context } from "./context/Context";
import Nav from "./components/Nav";

function App() {
    const [showNav, setShowNav] = useState(false);

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
    }, [handleScroll]);

    const handleContact = () => {
        window.scrollTo({
            top: contactRef?.current?.offsetTop,
            behavior: "smooth",
        });
    };

    const handleNavigation = (item) => {
        setShowNav(false);
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

    const handleShowNav = () => setShowNav(!showNav);

    return (
        <div className="app">
            <Nav visible={showNav} onClick={handleNavigation} />
            <Header
                showNav={showNav}
                onClick={handleNavigation}
                onShowNav={handleShowNav}
            />
            <Home onContact={handleContact} />
            <Work ref={workRef} />
            <About ref={aboutRef} />
            <Service ref={serviceRef} />
            <Contact ref={contactRef} />
            <MessengerCustomerChat
                pageId="115737633600819"
                appId="223124739926461"
            />
        </div>
    );
}

export default App;
