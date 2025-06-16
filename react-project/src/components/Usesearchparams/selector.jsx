import React from "react";
import { useSearchParams } from "react-router-dom";

const users = [
    { name: "Neetu", role: "admin" },
    { name: "Karan", role: "user" },
    { name: "Sana", role: "guest" },
    { name: "Jiya", role: "admin" },
    { name: "Vicky", role: "user" },
];

const RoleSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const roleFilter = searchParams.get("role") || "all";

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ role: value });
    }
  };

  const filteredUsers =
    roleFilter === "all"? users: users.filter((user) => user.role === roleFilter);

return (
    <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 hover:text-blue-500 underline decoration-wavy mt-5">User List</h2>

        <select
            value={roleFilter}
            onChange={handleChange}
            className="mb-4 p-2 border rounded w-50"
        >
            <option value="all" className="bg-purple-500">All</option>
            <option value="admin" className="bg-purple-500">Admin</option>
            <option value="user" className="bg-purple-500">User</option>
            <option value="guest" className="bg-purple-500">Guest</option>
        </select>

        <ul>
            {filteredUsers.map((user, index) => (
                <li key={index}>
                    {user.name} - {user.role}
                </li>
            ))}
        </ul>
    </div>
);
};

export default RoleSelector;
