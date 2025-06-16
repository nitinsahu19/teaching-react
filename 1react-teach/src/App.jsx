import React, { Suspense, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Form from './Components/Form'
import Header from './Components/Header';
// import Home from './Components/Home';
const Home = React.lazy(() => import('./Components/Home'))
// import About from './Components/About';
const About = React.lazy(() => import('./Components/About'))
// import Blog from './Components/Blog';
const Blog = React.lazy(() => import('./Components/Blog')) 
// import Weather from './Components/Weather';
const Weather = React.lazy(() => import('./Components/Weather'))
import ProductCart from './Components/ProductCart';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate()

  return (
    <>
      {<Suspense fallback={<div className='mt-50 text-7xl'>Loading....</div>} >
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
          <Route path='/header' element={<Header />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Weather' element={<Weather />} />
        {/* <ProtectedRoute /> */}
        </Routes>
      </Suspense>}

    </>
  )
}

export default App

