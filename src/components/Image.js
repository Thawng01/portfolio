import React from "react";

const Image = ({ img, imgWebp }) => {
    return (
        <picture className="w-full h-full">
            <source srcset={imgWebp} type="image/webp" />
            <source srcset={img} />
            <img src={imgWebp} alt="" />
        </picture>
    );
};

export default Image;
