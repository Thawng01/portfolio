import React, { useState } from "react";

import { menuWithIcon } from "../data";
import SelectContact from "./SelectContact";

const BottomNav = ({ onClick }) => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = (menu) => {
        if (menu === "Contacts") {
            setIsShow(!isShow);
        } else {
            onClick(menu);
        }
    };

    return (
        <>
            <div className="fixed flex w-full h-[60px] items-center justify-evenly md:hidden bg-white bottom-0 left-0 z-40">
                <div
                    className={`${
                        isShow ? "block" : "hidden"
                    } fixed top-0 left-0 w-full h-full bg-white/2 backdrop-brightness-100`}
                    onClick={() => setIsShow(false)}
                />
                <SelectContact isShow={isShow} />
                {menuWithIcon.map((m, i) => {
                    return (
                        <div
                            key={m.id}
                            className={`flex flex-col items-center ${
                                m.title === "Contacts"
                                    ? `bg-white w-[4.3rem] h-[4.3rem] sm:w-[6rem] sm:h-[6rem] justify-center rounded-full -translate-y-6 shadow-md transition-all duration-300 ${
                                          isShow
                                              ? "rotate-[360deg]"
                                              : "rotate-0"
                                      }`
                                    : ""
                            }`}
                            onClick={() => handleClick(m.title)}
                        >
                            <span>{m.icon}</span>
                            <p className="text-sm">{m.title}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BottomNav;
