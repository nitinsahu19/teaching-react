// import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Prectice from "./components/prectice";
import Errors from "./components/Errors";




const App=()=>{
 

  


  return  <>
<BrowserRouter>
 <Routes>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/Home" element={<Prectice/>}/>
  <Route path="*" element = {<Errors/>}/>
 </Routes>
 </BrowserRouter>



 
 
  
  
  </>
}
export default App











