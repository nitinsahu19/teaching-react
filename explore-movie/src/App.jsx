import './App.css'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPageFound from './components/NoPageFound'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Navbar/>}>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/movie" element = {<MovieList/>}/>
      </Route>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "*" element = {<NoPageFound/>}/>
   


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
