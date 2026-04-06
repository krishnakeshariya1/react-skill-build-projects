import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [Theme, setTheme] = useState("light");

    useEffect(()=>{
        const saved = localStorage.getItem("theme");

        if(saved) setTheme(saved)
    },[])

    useEffect(()=>{
        localStorage.setItem("theme",Theme)
    },[Theme])

    const toggleTheme = () =>{
        setTheme((prev) =>  prev === "light" ? "dark" : "light")
    }
    return(
        <ThemeContext.Provider value={{Theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}