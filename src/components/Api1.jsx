import React, { useEffect, useState } from 'react';

const Api1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Todo List</h1>

      <ul className="space-y-2">
        {data.slice(0, 15).map((todo) => (
          <li key={todo.id} className="border p-2 rounded">
            <div className="flex justify-between">
              <span>{todo.title}</span>
              <span>{todo.completed ? '✅' : '❌'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api1;
