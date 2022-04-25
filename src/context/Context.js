import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [position, setPosition] = useState(0);

    return (
        <Context.Provider value={{ position, setPosition }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
