import './App.css'
import React from 'react'
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
const Count = React.lazy(()=> import ("./components/Count/CountButton"));
const Todo = React.lazy(()=> import ("./components/Todo/Todo"));
const TodoApp = React.lazy(()=> import ("./components/Todo/simpletodo"));
const ShowHide = React.lazy(()=> import ("./components/show/hide/show_hide"));
const NoPageFound = React.lazy(()=> import ("./components/NopageFound/Nopagefound"));
const Navbar = React.lazy(()=> import ("./components/Navbar/Navbar"));
const ThemeToggle = React.lazy(()=> import ("./components/ThemeButton/Theme"));
const RoleSelector = React.lazy(()=> import ("./components/Usesearchparams/selector"))


function App() {

  return (
   <div>
    <BrowserRouter>
    <Routes> 
      <Route path = "count" element = {<Count/>}/>
      <Route path = "todo" element = {<Todo/>}/>
      <Route path = "/" element = {<ShowHide/>}/>
      <Route path = "SimpleTodo" element = {<TodoApp/>}/>
      <Route path = "/navbar" element = {<Navbar/>}/>
      <Route path = "*" element = {<NoPageFound/>}/>
      <Route path = "/theme" element = {<ThemeToggle/>}/>
      <Route path = "/selector" element = {<RoleSelector/>}/>
    </Routes>
    </BrowserRouter>

 
   {/* <Count/> */}
   </div>
  )
}

export default App
