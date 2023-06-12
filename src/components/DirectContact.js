import React from "react";

const DirectContact = ({
    link,
    icon,
    title,
    color,
    mr = "mr-2",
    mb = "mb-8",
    width = "w-[10rem]",
}) => {
    return (
        <div className={`text-center flex items-center justify-center ${mb}`}>
            <a href={link} className={`flex items-center ${width}`}>
                <div className={`text-xl ${color} ${mr}`}>{icon}</div>
                <span className={`text-md dark:text-light`}>{title}</span>
            </a>
        </div>
    );
};

export default DirectContact;
