import React from "react";

const MenuIndicator = (w, menu, activeClass) => {
    return (
        <div
            className={`absolute top-0 h-[2px] w-[50px] rounded-sm transition-all duration-500 ${
                activeClass === menu ? "bg-primary" : ""
            }`}
        />
    );
};

export default MenuIndicator;
