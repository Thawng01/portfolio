import React from "react";

const Image = ({ img, imgWebp }) => {
    return (
        <picture>
            <source media="(max-width: 400px)" srcset={imgWebp} />
            {/* <source srcset={img} /> */}
            <img src={imgWebp} alt="" />
        </picture>
    );
};

export default Image;
