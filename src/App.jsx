
import { Routes, Route, useSearchParams } from 'react-router-dom'
import './App.css'
import Form from './component/Form'
import ProductCard from './component/ProductCard'
import Card2 from './component/Card2'
import { useState, useEffect } from 'react'
import Fetchapi from './component/Fetchapi'
import DefaulPage from './component/DefaulPage'
// import FakeApiData from './component/FakeApiData'
import ProtectRoute from './component/ProtectRoute'
import Weather from './component/weather'
import Details from './component/Details'
import MultipleFrom from './component/MultipleFrom'
import Todo from './component/Todo'
import FeedBack from './component/FeedBack'
import MoodDiary from './component/MoodDiary'
import UseForm from './component/UseForm'



function App() {

  const [mode, setMode] = useState("light");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");



  const colorMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light")
    }
  }

  const logOut = () => {
    localStorage.removeItem("login");
    setLogin(false)

  }
  

  return (

    <>

      {<Routes>
        <Route path='*' element={<DefaulPage />} />
        <Route path='/' element={
          <ProtectRoute>
            <ProductCard mode={mode} error={error} colorMode={colorMode} logOut={logOut} /> </ProtectRoute>} />
        <Route path='/cart' element={
          <ProtectRoute>
            <Card2 title="React vite" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6EAHvdbel54bf0pizpGJS2ZkDVfkcoEpuQ&s"} mode={mode} colorMode={colorMode} logOut={logOut} />
          </ProtectRoute>} />
        <Route path='/about' element={
          <ProtectRoute>
            <Fetchapi mode={mode} colorMode={colorMode} logOut={logOut} />
          </ProtectRoute>} />
        <Route path='/multifrom' element={ <MultipleFrom mode={mode} colorMode={colorMode} logOut={logOut} />
 } />
        <Route path='/feedback' element={ <FeedBack mode={mode} colorMode={colorMode} logOut={logOut} />
 } />
        <Route path='/weather' element={ <Weather mode={mode} colorMode={colorMode} logOut={logOut} />
 } />
        <Route path='/todo' element={ <Todo mode={mode} colorMode={colorMode} logOut={logOut} />
 } />
        <Route path='/moodDiary' element={ <MoodDiary mode={mode} colorMode={colorMode} logOut={logOut} />
 } />
        <Route path='/useform' element={ <UseForm mode={mode} colorMode={colorMode} logOut={logOut} />
 } />
        <Route path='/Form' element={<Form setLogin={setLogin} error={error} setError={setError} />} />
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes> }






    </>
  )
}

export default App
