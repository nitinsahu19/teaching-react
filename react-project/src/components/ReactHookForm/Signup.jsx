// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     console.log('Form Data:', formData);
//     alert('Signup successful!');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Create Account</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4 text-sm">
//           Already have an account?
//           <Link to="/login" className="text-indigo-600 hover:underline ml-1">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import {useForm} from "react-hook-form";
import React from "react";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link} from "react-router-dom";

const Schema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"), 
  password: z.string().min(6, "Password must be at least 6 characters long"),
 
})
 function Signup() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(Schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            {...register("name")}
            className={`w-full px-4 py-2 border rounded-lg  ${errors.name ? "border-red-500" : "border-gray-300"} `}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`w-full px-4 py-2 border rounded-lg  ${errors.email ? "border-red-500" : "border-gray-300"} `}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            {...register("password")}
            className={`w-full px-4 py-2 border rounded-lg  ${errors.password ? "border-red-500" : "border-gray-300"} `}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">
          Sign In
        </button>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/login" className="text-indigo-600 hover:underline ml-1">Login here</Link>
        </p>
      </form>
     
        
    </div>
  );
}
export default Signup;