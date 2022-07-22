import React, { forwardRef } from "react";

import "./service.css";
import useAnimation from "../hook/useAnimation";

const Service = forwardRef((props, ref) => {
    useAnimation(ref, 900);

    return (
        <div ref={ref} className="service">
            <h2 className="font-bold font-serif">SERVICE</h2>
            <div className="service-container">
                <div className="service-text-container">
                    <p className="service-text">
                        I would use the technology below to build attractive and
                        responsive website for you.
                    </p>
                    <h3 className="service-technology">Technology</h3>
                    <p className="technology-name">
                        HTML, CSS, JAVASCRIPT, REACT, NODE, EXPRESS, MONGODB,
                        MYSQL
                    </p>
                </div>
                <img className="service-image" alt="" src="/service.png" />
            </div>
        </div>
    );
});

export default Service;
