import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./products/Login";
import Products from './products/Products';
// import { useNavigate } from 'react-router-dom';
import NotFound from './products/NotFound';
function App() {
  
  const [islogin , setIsLogin] = useState(false)


  
  return (

    <BrowserRouter>
      <Routes>
        <Route path='' element = {<Login/>}/>
        <Route path='/login' element = {<Login setIsLogins = {setIsLogin} />} />  
        <Route path='/products' element = {islogin ? <Products/> : <Navigate to={"/login"}/>} />  
        <Route path='*' element = { islogin ? <Products/> : <NotFound/>}/>
       </Routes>
    </BrowserRouter>

  );
}

export default App;
