import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: THEME;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.LIGHT,
  setTheme: () => {},
});

export const ThemeProviderContext = ({ children, initialTheme }: ThemeProviderProps) => {
  const storedTheme = localStorage.getItem('theme') as THEME | null;
  const defaultTheme = storedTheme || THEME.LIGHT;

  const [theme, setTheme] = useState<THEME>(initialTheme || defaultTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme: theme || THEME.LIGHT,
    toggleTheme,
  };
};
