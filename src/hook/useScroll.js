import { useCallback, useEffect, useState } from "react";

const useScroll = () => {
    const [activeClass, setActiveClass] = useState("Home");

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const project = document.getElementById("project");
        const service = document.getElementById("service");
        const about = document.getElementById("about");
        const contact = document.getElementById("contact");

        if (
            scrollPosition >= project.offsetTop - 65 &&
            scrollPosition < service.offsetTop - 65
        ) {
            setActiveClass("Projects");
        } else if (
            scrollPosition >= service.offsetTop - 65 &&
            scrollPosition < about.offsetTop - 65
        ) {
            setActiveClass("Service");
        } else if (
            scrollPosition >= about.offsetTop - 65 &&
            scrollPosition < contact.offsetTop - 65
        ) {
            setActiveClass("About");
        } else if (
            scrollPosition >= contact.offsetTop - 65 &&
            scrollPosition !== 0
        ) {
            setActiveClass("Contact");
        } else {
            setActiveClass("Home");
        }
    }, [setActiveClass]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return activeClass;
};

export default useScroll;
