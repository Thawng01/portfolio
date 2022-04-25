import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./work.css";
import PROJECTS from "../projects";
import useAnimation from "../hook/useAnimation";

const Work = () => {
    const [eleWidth, setEleWidth] = useState(0);
    const [windowSize, setWindowSize] = useState(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const itemWidth = 270 * PROJECTS?.length;

    const ref = useRef();
    const containerRef = useRef();
    const myRef = useRef();
    useAnimation(containerRef, 100);

    // move to left and update scroll to hide left arrow if scroll left is 0
    const moveLeft = () => {
        const left = (ref.current.scrollLeft -= eleWidth + 30);
        setScrollLeft(left);
    };

    // move to right and update scroll left to show left arrow if scroll left is more than 0
    const moveRight = () => {
        const right = (ref.current.scrollLeft += eleWidth + 30);
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
        setEleWidth(ref?.current?.offsetWidth);
        setContainerWidth(containerRef?.current?.offsetWidth);
    }, [setEleWidth, windowSize, setContainerWidth]);

    return (
        <div ref={myRef} className="work">
            <h2 className="work-title">Projects I developed so far</h2>
            <div ref={containerRef} className="work-container item">
                <div ref={ref} className="work-inner-container">
                    {PROJECTS.map((item, i) => {
                        return (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                key={i}
                                className="work-item-container"
                            >
                                <img
                                    src="/background.jpg"
                                    alt=""
                                    className="work-item-image"
                                />

                                <div className="app-info">
                                    <h3 className="app-name">{item.name}</h3>
                                    <p className="app-description">
                                        {item.description}
                                    </p>
                                </div>
                            </a>
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
};

export default Work;
