import './App.css';
import React from 'react';
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Home from "./components/Navbar/Home";
import Help from "./components/Navbar/Help";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Count = React.lazy(() => import("./components/Count/CountButton"));
const Todo = React.lazy(() => import("./components/Todo/Todo"));
const TodoApp = React.lazy(() => import("./components/Todo/simpletodo"));
const ShowHide = React.lazy(() => import("./components/show/hide/show_hide"));
const NoPageFound = React.lazy(() => import("./components/NopageFound/Nopagefound"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const ThemeToggle = React.lazy(() => import("./components/ThemeButton/Theme"));
const RoleSelector = React.lazy(() => import("./components/Usesearchparams/selector"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
           
            <Route path="/" element={<Navbar />}>
              <Route index element={<ShowHide />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="help" element={<Help />} />
              <Route path="count" element={<Count />} />
              <Route path="todo" element={<Todo />} />
              <Route path="SimpleTodo" element={<TodoApp />} />
              <Route path="theme" element={<ThemeToggle />} />
              <Route path="selector" element={<RoleSelector />} />
              <Route path="*" element={<NoPageFound />} />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
