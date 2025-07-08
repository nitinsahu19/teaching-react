import React, { useState } from 'react';

const Hello = () => {
  const [user, setUser] = useState(null);

  const Names = [
    { id: 1, name: 'Raju', Age: 20, Address: 'Jaipur' },
    { id: 2, name: 'Rahul', Age: 18, Address: 'Ghinoi' },
    { id: 3, name: 'Mukesh', Age: 66, Address: 'Chomu' },
    { id: 4, name: 'Vikas', Age: 20, Address: 'Delhi' },
    { id: 5, name: 'Pooran', Age: 50, Address: 'Jaipur' },
  ];

  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold mb-4'>Select a Name:</h2>
 
      {Names.map((item) => (
        <div key={item.id} className='mb-2 flex items-center gap-3'>
          <input type="radio" id={`user-${item.id}`} name="user" value={item.id} onChange={() => setUser(item)} />
          <label htmlFor={`user-${item.id}`} className='cursor-pointer'>
            {item.name}
          </label>
        </div>
      ))}
 
      {user && (
        <div className='mt-6'>
          <h2 className='text-lg font-semibold mb-2 text-green-600'>Selected User Info:</h2>
          <table className='table-auto border-collapse border border-gray-400'>
            <thead>
              <tr>
                <th className='border border-gray-400 px-4 py-2'>ID</th>
                <th className='border border-gray-400 px-4 py-2'>Name</th>
                <th className='border border-gray-400 px-4 py-2'>Age</th>
                <th className='border border-gray-400 px-4 py-2'>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-400 px-4 py-2'>{user.id}</td>
                <td className='border border-gray-400 px-4 py-2'>{user.name}</td>
                <td className='border border-gray-400 px-4 py-2'>{user.Age}</td>
                <td className='border border-gray-400 px-4 py-2'>{user.Address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Hello;
