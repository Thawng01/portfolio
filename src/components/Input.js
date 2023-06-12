import React, { useState } from "react";

const Input = ({ value, placeholder, onChange, ...otherProps }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = () => {
        if (!value) setIsFocused(false);
    };

    return (
        <div className="my-1">
            <p
                className={`inline-block ${
                    isFocused
                        ? "translate-y-0 text-dark dark:text-light"
                        : "text-[#a6a6a6] translate-y-9"
                } px-2 transition-all duration-500 `}
            >
                {placeholder}
            </p>
            <input
                className={`dark:text-light dark:bg-dark w-full border-b focus:outline-0 p-2`}
                {...otherProps}
                s
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default Input;
