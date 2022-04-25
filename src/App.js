import { useCallback, useContext, useEffect, useRef } from "react";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { Context } from "./context/Context";
import Modal from "./components/Modal";

function App() {
    const { setPosition } = useContext(Context);

    const ref = useRef();

    const handleScroll = useCallback(() => {
        setPosition(ref?.current?.scrollTop);
    }, [setPosition]);

    useEffect(() => {
        ref?.current?.addEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="app" ref={ref}>
            <Home />
            <Work />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
