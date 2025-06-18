
import { useState, useEffect } from "react";

const useSimpleTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("simple-theme") === "dark";
  });

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000";
    localStorage.setItem("simple-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
};

export default useSimpleTheme;
