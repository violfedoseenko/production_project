import {
    FC, useState, useMemo, ReactNode, useCallback,
} from 'react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeContext } from '../lib/ThemeContext';

interface ThemeSBProviderProps {
    children: ReactNode,
    initialTheme: Theme
}

export const ThemeSBProvider: FC<ThemeSBProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = useCallback(() => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }, [theme]);

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
