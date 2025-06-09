// import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import Home from "./RoutesFol/Home";
import Cart from "./RoutesFol/Cart";
import Details from "./RoutesFol/details";
import Todo from "./TodoList/Todo";




const App = () => {





  return (
    <>

{/* 
      <Routes> 
         <Route path="/home" element={<Home/>}>
          <Route path="cart"  element={<Cart/>} />
          <Route path="details" element={<Details/>} />
        </Route>
      </Routes> */}


      {/* <BrowserRouter>
 <Routes>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/Home" element={<Prectice/>}/>
  <Route path="*" element = {<Errors/>}/>
 </Routes>
 </BrowserRouter> */}

      <Todo/>






      {/* <Home/> */}






    </>
  )
}
export default App











