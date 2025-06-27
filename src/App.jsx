import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Github from "./Component/github";
import {Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Notes from "./Component/Notes";
import Forms from "./Component/Forms"; 
import Weather from "./Component/Weather";
import Form3 from "./Componentreduce/Form3";
import Feedback from "../ComponentFeedback/Feedback";
import LoginForm from "./Login";
import Mooddiary from "../ComponentFeedback/MoodDariyApp/Mooddiary";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/github" element={<Github />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/form" element={<Forms />} /> 
        <Route path="/weather" element={<Weather />} />
        {/* <Route path="/form3" element={<Form3/>}  />  */}
        <Route path="/formm" element={<Form3 />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/loginform" element={<LoginForm/>} />
        <Route path="MoodDiary" element={<Mooddiary/>}/>
      </Routes>
    </>
  );
}

export default App;
