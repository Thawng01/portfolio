import React from "react";

const Image = ({ img, imgWebp }) => {
    return (
        <picture>
            <source media="" srcset={imgWebp} />
            <source srcset={img} />
            <img src={imgWebp} alt="" />
        </picture>
    );
};

export default Image;
