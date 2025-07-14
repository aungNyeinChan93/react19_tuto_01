import React, { createContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextInitialValue {
  theme: Theme;
  toggleTheme: () => void;
}
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextInitialValue>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
