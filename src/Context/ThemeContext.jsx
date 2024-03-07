/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [isDark , setIsDark] = useState(false);
    return <ThemeContext.Provider value={{isDark , setIsDark}}>
        {children}
    </ThemeContext.Provider>
}

const useTheme = () => {
    return useContext(ThemeContext);
}

export {ThemeContextProvider , ThemeContext , useTheme }
