import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Github from "./Component/github";
import {Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Notes from "./Component/Notes";
import Forms from "./Component/Forms";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/github" element={<Github />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/form" element={<Forms />} />
      </Routes>
    </>
  );
}

export default App;
