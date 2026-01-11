import { useSearchParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const dummyUsers = [
  { id: 1, name: "Nitin", role: "Admin" },
  { id: 2, name: "Ravi", role: "User" },
  { id: 3, name: "Meena", role: "Guest" },
];

const UserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const roleFilter = searchParams.get("role") || "All";
  const { theme } = useTheme();

  const filteredUsers =
    roleFilter === "All"
      ? dummyUsers
      : dummyUsers.filter((user) => user.role === roleFilter);

  const handleChange = (e) => {
    const role = e.target.value;
    setSearchParams(role === "All" ? {} : { role });
  };

  return (
    <div className="p-4 flex h-full w-full justify-center items-center gap-3.5 flex-col">
      <h2 className="text-xl font-bold mb-4">Filter by Role</h2>

      <select
        onChange={handleChange}
        value={roleFilter}
        className={`border-1 p-2 rounded ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        }`}
      >
        <option>All</option>
        <option>Admin</option>
        <option>User</option>
        <option>Guest</option>
      </select>

      <ul className="mt-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - <span className="text-sm">{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
