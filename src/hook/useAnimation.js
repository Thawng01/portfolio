import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

import "./animation.css";

const useAnimation = (ref, currentPosition) => {
    const { position } = useContext(Context);

    useEffect(() => {
        if (position >= currentPosition) {
            setTimeout(() => {
                ref?.current?.classList.remove("item");
                ref?.current?.classList.add("animation");
            }, 100);
        }

        if (position < currentPosition) {
            setTimeout(() => {
                ref?.current?.classList.add("item");
                ref?.current?.classList.remove("animation");
            }, 100);
        }
    }, [position]);
};

export default useAnimation;
