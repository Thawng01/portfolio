import React from "react";

const ProjectWrapper = ({ children }) => {
    return (
        <div className="w-full ms:w-4/5 lg:w-3/4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                {children}
            </div>
        </div>
    );
};

export default ProjectWrapper;
