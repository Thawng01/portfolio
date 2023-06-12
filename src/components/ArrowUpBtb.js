import React from "react";
import { useCallback, useState, useEffect } from "react";

import { IoArrowUp } from "react-icons/io5";

const ArrowUpBtb = () => {
    const [position, setPosition] = useState(document.scrollY);

    const handleScroll = useCallback(
        () => setPosition(window.scrollY),
        [setPosition]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const handleScrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    return (
        <div
            className={`bg-primary fixed right-6 bottom-20 md:bottom-10 p-1 md:p-2 hover:bg-darkPrimary cursor-pointer duration-500 transition-all ${
                position > 300 ? "visible opacity-1" : "invisible opacity-0"
            }`}
            onClick={handleScrollToTop}
        >
            <IoArrowUp className="text-white text-lg" />
        </div>
    );
};

export default ArrowUpBtb;
