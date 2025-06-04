import { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import Home from './component/Home';  
import { Routes, Route, useNavigate } from 'react-router-dom';
import TodoList from './component/TodoList';

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (login === true) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [login]);

  return (
    // <Routes>
    //   <Route path='/login' element={<Form login={login} setLogin={setLogin} />} /> 
    //   <Route path='/home' element={<Home />} />
    // </Routes> 


    <>
    <TodoList/>
    
    </>
  );
}

export default App;


