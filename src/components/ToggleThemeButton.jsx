import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      {/* <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span> */}
    </button>
  );
};

export default ToggleThemeButton;
