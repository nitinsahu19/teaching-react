import React, { useState, useEffect } from "react";
import { getTheme,saveTheme } from "./LocalStorage";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="px-2 py-2 bg-white-300 dark:bg-white-700 rounded">
      {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
