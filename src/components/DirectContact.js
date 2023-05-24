import React from "react";

const DirectContact = ({
    link,
    icon,
    title,
    color,
    mr = "mr-2",
    mb = "mb-8",
}) => {
    return (
        <a href={link} className={`flex items-center justify-center ${mb}`}>
            <div className={`text-xl ${color} ${mr}`}>{icon}</div>
            <span className={`font-serif text-md text-white`}>{title}</span>
        </a>
    );
};

export default DirectContact;
