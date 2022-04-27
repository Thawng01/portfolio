import { forwardRef, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./work.css";
import { PROJECTS } from "../data";
import useAnimation from "../hook/useAnimation";

const Work = forwardRef((props, ref) => {
    const [eleWidth, setEleWidth] = useState(0);
    const [windowSize, setWindowSize] = useState(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const itemWidth = 270 * PROJECTS?.length;

    const myRef = useRef();
    useAnimation(ref, 200);

    // move to left and update scroll to hide left arrow if scroll left is 0
    const moveLeft = () => {
        const left = (myRef.current.scrollLeft -= eleWidth + 30);
        setScrollLeft(left);
    };

    // move to right and update scroll left to show left arrow if scroll left is more than 0
    const moveRight = () => {
        const right = (myRef.current.scrollLeft += eleWidth + 30);
        setScrollLeft(right);
    };

    const handleWindowSize = (e) => {
        setWindowSize(e.target.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    }, []);

    useEffect(() => {
        setEleWidth(myRef?.current?.offsetWidth);
        setContainerWidth(myRef?.current?.offsetWidth);
    }, [setEleWidth, windowSize, setContainerWidth]);

    return (
        <div ref={ref} className="work">
            <h2 className="work-title">My Recent Work</h2>
            <div className="work-container">
                <div ref={myRef} className="work-inner-container">
                    {PROJECTS.map((item, i) => {
                        return (
                            <div key={i} className="work-item-container">
                                <div className="work-item-overlay">
                                    <div className="visit-website-container">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="item-link"
                                        >
                                            Visit website
                                        </a>
                                        <IoIosArrowForward className="item-btn-icon" />
                                    </div>
                                </div>
                                <img
                                    src={item.image}
                                    alt=""
                                    className="work-item-image"
                                />

                                <div className="app-info">
                                    <h3 className="app-name">{item.name}</h3>
                                    <p className="app-description">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {itemWidth > containerWidth && (
                    <>
                        {scrollLeft > 0 && (
                            <div className="arrow-left-container">
                                <IoIosArrowBack
                                    className="left-arrow"
                                    onClick={moveLeft}
                                />
                            </div>
                        )}

                        <div className="arrow-right-container">
                            <IoIosArrowForward
                                className="right-arrow"
                                onClick={moveRight}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
});

export default Work;
