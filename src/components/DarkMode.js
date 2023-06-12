import React, { useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const DarkMode = ({ isDark, onToggle }) => {
    useEffect(() => {
        if (isDark) {
            window.document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            window.document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <div
            className="fixed right-10 lg:right-16 top-4 z-50"
            onClick={onToggle}
        >
            {isDark ? (
                <div className="absolute cursor-pointer">
                    <IoSunnyOutline className="dark:text-white text-lg" />
                </div>
            ) : (
                <div className="absolute cursor-pointer">
                    <IoMoonOutline className="dark:text-white text-lg" />
                </div>
            )}
        </div>
    );
};

export default DarkMode;
