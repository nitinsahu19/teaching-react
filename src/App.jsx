import { useContext, useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import Wishlist from './components/Wishlist';
import { ThemeContext } from './context/ThemeContext';
import Todo from './components/Todo';
import Notes from './components/Notes';
import Multipleform from './components/Multipleform';

const Movies = lazy(() => import('./components/Movies'));


function App() {

  const [login, setLogin] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });


  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("loggedIn", login);
  }, [login]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };


  

  return (

    <div className={theme === "dark" ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      {login && <Header theme={theme} />}

      <div className="absolute top-3 right-2 ">
        <button onClick={toggle} className="px-4 py-1 border rounded">{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</button>
      </div>

      <Routes>
        <Route path='/login' element={<Login setLogins={setLogin} />}/>
        <Route path='/movies' element={
          <Suspense fallback={<div>Loading movies...</div>}>
            <Movies/>
          </Suspense>
        } />
        <Route path='/wishlist' element={login ? <Wishlist /> : <Navigate to='/login' replace />} />
        <Route path='/' element={<Navigate to='/movies' />} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/form' element={<Multipleform/>} />
      </Routes>

  
    </div>
  
  );
}

export default App;
