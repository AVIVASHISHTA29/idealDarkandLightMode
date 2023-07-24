import React, { useEffect } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const localTheme = window.localStorage.getItem("theme");
    return localTheme === "dark" ? true : false;
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    window.localStorage.setItem("theme", theme);

    document.documentElement.dataset.theme = theme;
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
