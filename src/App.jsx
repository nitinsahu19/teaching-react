import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasksform from './comonents/Tasksform';
// import ApiFetch from './comonents/ApiFetch';
// import Todolist from './comonents/Todolist';
// import Uselocalstorage from './comonents/Uselocalstorage';
// import Todolist from './comonents/Todolist';

// const Navbarr = React.lazy(() => import('./comonents/Router/Navbarr'));
// const Home = React.lazy(() => import('./comonents/Router/Home'));
// const About = React.lazy(() => import('./comonents/Router/About'));
// const Contact = React.lazy(() => import('./comonents/Router/Contact'));
// const ProtectedRoute = React.lazy(() => import('./comonents/Router/ProtectedRouter'));
// const Apiweather = React.lazy(() => import('./comonents/Apiweather'));
// const ApiFetch = React.lazy(() => import('./comonents/ApiFetch'));
// const Todolist = React.lazy(() => import('./comonents/Todolist'));

function App() {                                   
  // const isLoggedIn = true; y

  return (<>
  {/* <Navbarr />
      <Suspense fallback={<div><h1>Loading... </h1></div>}>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/Weather" element={<Apiweather/>} />
          <Route path="/Apifetch" element={<ApiFetch/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact"element={<ProtectedRoute isLoggedIn={isLoggedIn}><Contact /></ProtectedRoute>}/>
        </Routes> 
      </Suspense> */}

      {/* <Todolist/> */}
      <Tasksform/>
      
      </>
          
    
  );
}

export default App;

// import React, { useState } from 'react';
// import Form from './comonents/form'; 
// import Product from './data/Product';
// import Addtocard from './data/addtocard';
// import { MdOutlineShoppingCart, MdLogout } from "react-icons/md";
// import { FaAffiliatetheme } from "react-icons/fa";
// import Todolist from './comonents/Todolist';
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const [addcart, setAddcart] = useState([]);
//   const [theme, setTheme] = useState('light');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     document.documentElement.classList.remove(theme);
//     document.documentElement.classList.add(newTheme);
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const handleAddToCart = (product) => {
//     const index = addcart.findIndex((item) => item.id === product.id);
//     if (index === -1) {
//       setAddcart([...addcart, { ...product, quantity: 1 }]);
//     } else {
//       const updatedCart = [...addcart];
//       updatedCart[index].quantity += 1;
//       setAddcart(updatedCart);
//     }
//   };

 
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setIsSidebarOpen(true); 
//   };

//   return (
//     <>
//       {!isLoggedIn ? (
//         <Form clcikfunction={handleLogin} />
//       ) : (
//         <>
         
//           <div className="flex justify-end gap-4 p-4 bg-gray-100 dark:bg-gray-800">
//             <button onClick={toggleTheme} className="bg-black text-white p-3 rounded">
//               <FaAffiliatetheme />
//             </button>
//             <button className="bg-black text-white p-3 rounded">
//               <MdLogout />
//             </button>
//             <button onClick={() => setIsSidebarOpen(true)} className="bg-black text-white p-3 rounded">
//               <MdOutlineShoppingCart />
//             </button>
//           </div>

        
//           <div
//             id="cartSidebar"
//             className={`fixed top-0 right-${isSidebarOpen ? '0' : '[-100%]'} w-[300px] h-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg transition-all duration-300 z-50 overflow-y-auto`}
//           >
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-bold">Your Cart</h2>
//               <button onClick={() => setIsSidebarOpen(false)} className="text-red-500 font-bold text-lg">X</button>
//             </div>
//             <Addtocard addcart={addcart} />
//           </div>

//           <Todolist/>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//             {Product.map((data, index) => (
//               <div key={index} className="border p-4 rounded shadow">
//                 <img className="w-full h-40 object-cover mb-2" src={data.image} alt={data.name} />
//                 <h3 className="font-bold">{data.name}</h3>
//                 <p className="text-gray-600">₹{data.price}</p>
//                 <button
//                   className="mt-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-3 rounded"
//                   onClick={() => handleAddToCart(data)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default App;

