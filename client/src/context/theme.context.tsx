import { createContext, useState } from "react";

interface IThemeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  toggleDarkMode: () => {},
});

interface IThemeContextProviderProps {
    children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: IThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode: () => void = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
