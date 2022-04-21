import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./work.css";

const items = [
    {
        name: "App name 1",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 2",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 3",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 4",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 5",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 6",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 7",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 8",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 9",
        description: "This is my first app that I have created using React",
    },
    {
        name: "App name 10",
        description: "This is my first app that I have created using React",
    },
];

const Work = () => {
    const [eleWidth, setEleWidth] = useState(0);
    const [windowSize, setWindowSize] = useState(null);

    const ref = useRef();

    const moveLeft = () => {
        ref.current.scrollLeft -= eleWidth - 60;
    };

    const moveRight = () => {
        ref.current.scrollLeft += eleWidth - 60;
    };

    const handleWindowSize = (e) => {
        setWindowSize(e.target.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
    }, []);

    useEffect(() => {
        setEleWidth(ref?.current?.offsetWidth);
    }, [setEleWidth, windowSize]);

    return (
        <div className="work">
            <h2 className="work-title">Projects I developed so far</h2>
            <div className="work-container">
                <div ref={ref} className="work-inner-container">
                    {items.map((item, i) => {
                        return (
                            <div key={i} className="work-item-container">
                                <img
                                    src="/public/background.jpg"
                                    alt=""
                                    className="work-item-image"
                                />

                                <h3 className="app-name">{item.name}</h3>
                                <p className="add-short-description">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="arrow-left-container">
                    <IoIosArrowBack className="left-arrow" onClick={moveLeft} />
                </div>

                <div className="arrow-right-container">
                    <IoIosArrowForward
                        className="right-arrow"
                        onClick={moveRight}
                    />
                </div>
            </div>
        </div>
    );
};

export default Work;
