import { useContext, useCallback, useEffect } from "react";
import { Context } from "../context/Context";

const useScroll = () => {
    const { setPosition } = useContext(Context);
    const handleScroll = useCallback(() => {
        setPosition(window.scrollY);
    }, [setPosition]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
};

export default useScroll;
