import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";

function Navbar() {
  const navLinks = [
    { to: "profile", label: "Profile" },
    { to: "settings", label: "Settings" },
    { to: "orders", label: "Orders" },
    { to: "users", label: "Users" },
    { to: "weather", label: "Weather" },
    { to: "github-profile-finder", label: "GitHub Finder" },
    { to: "movies", label: "Movies" },
    { to: "todo", label: "Todo" },
    { to: "counter", label: "Counter" },
    { to: "multiple-step-form", label: "Multiple-Step-form" },
    { to: "react-hook-form", label: "ReactHookForm" },
  ];

  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white placeholder-white"
          : "bg-gray-50 text-black placeholder-black"
      } min-h-screen flex flex-col items-center  text-gray-800`}
    >
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-4 shadow-md flex justify-between">
        <h1 className="text-white text-2xl font-semibold text-center">
          Code with Nitin
        </h1>

        <ToggleThemeButton />
      </header>

      {/* NavBar */}
      <nav className="flex flex-wrap justify-center gap-4 my-6 bg-white p-4 rounded-lg shadow-md">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium 
              ${
                isActive
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500  text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Outlet for nested routes */}
      <main className="w-full px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
