// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import { lazy, Suspense } from 'react'; 

// const Cart = React.lazy(() => import('./component/Cart'))
// const Header = React.lazy(() => import('./component/Header'))
// const Datas = React.lazy(() => import('./component/Datas'))

// function App() {

//   return (

//     <>
//     {<Suspense fallback={<div className=' text-red-600 text-9xl flex justify-center items-center' id='hello'>Loading...</div>}>
//       <Routes>
//         <Route path='/navbar' element={<Navbar />} >
//           <Route path='cart' element={<Cart />} />
//           <Route path='header' element={<Header />} />
//           <Route path='data' element={<Datas />} />
//         </Route>
//       </Routes>
//     </Suspense>} 
 
    
//   </>
//   )
// }

// export default App;

 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute'; 
import TodoList from './component/TodoList'
import Login from './component/Login';

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todolist" element={<ProtectedRoute><TodoList/></ProtectedRoute>} /> 
    </Routes>
  );
};

export default App;


 