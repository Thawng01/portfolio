import React from "react";

const ProjectWrapper = ({ children }) => {
    return (
        <div className="w-3/4 mx-auto my-4">
            <div className="flex items-center">{children}</div>
        </div>
    );
};

export default ProjectWrapper;
