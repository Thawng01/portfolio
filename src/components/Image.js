import React from "react";

const Image = ({ img, imgWebp, smallImage }) => {
    return (
        <picture className="max-w-full h-auto">
            <source srcSet={smallImage} media="(max-width: 400px)" />
            <source srcSet={imgWebp} type="image/webp" />
            <source srcSet={img} />
            <img src={imgWebp} alt="" />
        </picture>
    );
};

export default Image;
