import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const updateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
