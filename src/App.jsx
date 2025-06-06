import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './component/Cart';
import Header from './component/Header';
import Navbar from './component/Navbar';
import TodoList from './component/TodoList';

function App() {
  // const [login, setLogin] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (login === true) {
  //     navigate("/home");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [login]);

  return ( 

    <>
      {/* <Routes>
        <Route path='/navbar' element={<Navbar />} >
          <Route path='cart' element={<Cart />} />
          <Route path='header' element={<Header />} />
        </Route>
      </Routes> */}

      <TodoList/>
    </>
  );
}

export default App;


