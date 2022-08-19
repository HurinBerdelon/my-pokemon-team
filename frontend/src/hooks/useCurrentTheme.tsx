import { createContext, ReactNode, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";
// import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { usePersistedState } from "./usePersistedState";

interface ThemeProviderProps {
    children: ReactNode
}

interface ThemeContextData {
    currentTheme: DefaultTheme
    toggleCurrentTheme(): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function CurrentThemeProvider({ children }: ThemeProviderProps): JSX.Element {

    const [currentTheme, setCurrentTheme] = usePersistedState<DefaultTheme>('my-pokemon-team-theme', light)

    // TODO: Persist theme on LocalStorage

    function toggleCurrentTheme() {
        if (currentTheme.title === 'dark') setCurrentTheme(light)
        // if (currentTheme.title === 'light') setCurrentTheme(dark)
    }

    return (
        <ThemeContext.Provider
            value={{ currentTheme, toggleCurrentTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useCurrentTheme() {
    return useContext(ThemeContext)
}