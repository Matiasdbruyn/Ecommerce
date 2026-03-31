import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext()


export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)

    const toogleTheme = () => {
        setDarkMode((prev) => !prev)
    }


    const value = useMemo(() => {
        return { darkMode, toogleTheme }
    }, [darkMode])


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}