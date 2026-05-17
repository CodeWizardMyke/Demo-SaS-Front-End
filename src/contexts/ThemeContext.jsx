import { createContext, useContext, useEffect, useState } from "react";
import { getStorageTheme, storageTheme } from "../utils/storageTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState( getStorageTheme() || "dark" );

    function toggleTheme() {

        const newTheme =
            theme === "light"
                ? "dark"
                : "light";

        storageTheme(newTheme);

        setTheme(newTheme);
    }

   useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

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