import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}