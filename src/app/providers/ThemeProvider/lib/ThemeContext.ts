import { createContext } from 'react';

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme'
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void; // функция принимает новую  тему и ничего не возвращает
}

export const ThemeContext = createContext<ThemeContextProps>({}); // для обеспечения глобального доступа к темам

export const LOCAL_STORAGE_THEME_KEY = 'theme'; // для сохранения выбранной темы даже после закрытия браузера
