import React from 'react';
// import Home from './components/Home';
import Movies from './components/Movies';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
   
function App() {
  return (
   <> 
    {/* <Home /> */}
    {/* <Movies /> */}
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='movies' element={<Movies/>}/>
    </Routes>
   </>
  );
}

export default App;
