import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Movies from './components/Movies';
import Login from './components/Login';
import Protectrouter from './components/Protectrouter';
import Home from './components/Home';
   
function App() {
  return (
   <> 
    {/* <Home /> */}
    {/* <Movies /> */}
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='home' element={<Protectrouter><Movies/></Protectrouter>}/>
    </Routes>
   </>
  );
}

export default App;
