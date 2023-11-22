/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, FunctionComponent } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../lib/ThemeContext';

// localStorage всегда возвращает строку, а в качестве значения у нас используется тип Theme
// необхрдимо сделать явное приведение
// если localStorage пустой, то будем устанавливать светлую тему по умолчанию
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FunctionComponent = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    document.body.className = theme;
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
        }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
