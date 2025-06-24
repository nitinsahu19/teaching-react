import React, { Suspense, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Form from './Components/Form'
import Header from './Components/Header';
import MultipalFrom from './Components/MultipalFrom';
// import Home from './Components/Home';
const Home = React.lazy(() => import('./Components/Home'))
// import About from './Components/About';
const About = React.lazy(() => import('./Components/About'))
// import Blog from './Components/Blog';
const Todo = React.lazy(() => import('./Components/Todo'))
// import Weather from './Components/Weather';
const Weather = React.lazy(() => import('./Components/Weather'))
// import ProductCart from './Components/ProductCart';
// import ProtectedRoute from './Components/ProtectedRoute';
// import Github from './Components/Github'; 
const Github = React.lazy(() => import('./Components/Github'))

function App() {
  const [login, setLogin] = useState(true);
  const [addCartItem, setAddCartItem] = useState([])
  const navigate = useNavigate()

  return (
    <>
      {<Suspense fallback={<div className='mt-50 text-7xl'>Loading....</div>} >
        <Header addCartItem={addCartItem} setAddCartItem={setAddCartItem} />
        <Routes>
          <Route path='/' element={<Home addCartItem={addCartItem} setAddCartItem={setAddCartItem} />} />
          <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
          <Route path='/about' element={<About />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/Weather' element={<Weather />} />
          <Route path='/github' element={<Github />} />
          {/* <ProtectedRoute /> */}
        </Routes>
      </Suspense>}

      {/* <MultipalFrom /> */}
    </>
  )
}

export default App

