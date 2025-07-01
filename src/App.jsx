import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'; 

const Cart = lazy(() => import('./component/Cart'));
const Header = lazy(() => import('./component/Header'));
const Datas = lazy(() => import('./component/Datas'));
const Weather = lazy(() => import('./component/Weather'));
const Formpages = lazy(() => import('./component/Formpages'));
const Feedback = lazy(() => import('./component/Feedback'));
const Colors = lazy(() => import('./component/Colors'));
const User = lazy(() => import('./component/User'))

function App() {
  return (
    <Suspense fallback={<div className='text-red-600 text-4xl flex justify-center items-center h-screen'>Loading...</div>}>
      <Routes>

        <Route path='/navbar' element={<Navbar />}>
        <Route path='user' element={<User />} />
          <Route path='cart' element={<Cart />} />
          <Route path='header' element={<Header />} />
          <Route path='data' element={<Datas />} />
          <Route path='weather' element={<Weather />} />
          <Route path='formpage' element={<Formpages />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='Colors' element={<Colors />} />

        </Route>
      </Routes>
    </Suspense>
 
  );
}

export default App;
