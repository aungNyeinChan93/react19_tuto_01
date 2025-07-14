import React, { use } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const TestTheme = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <React.Fragment>
      <section
        className={`w-full h-screen ${
          theme === "light"
            ? "bg-slate-100 text-black "
            : "bg-slate-900 text-white"
        }`}
      >
        {theme}
        <button type="button" onClick={toggleTheme}>
          Change Theme
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestTheme;
