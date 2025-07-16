
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Form from './component/Form'
import ProductCard from './component/ProductCard'
import { useState } from 'react'
import Fetchapi from './component/Fetchapi'
import DefaulPage from './component/DefaulPage'
import ProtectRoute from './component/ProtectRoute'
import Weather from './component/weather'
import Details from './component/Details'
import MultipleFrom from './component/MultipleFrom'
import Todo from './component/Todo'
import FeedBack from './component/FeedBack'
import MoodDiary from './component/MoodDiary'
import UseForm from './component/UseForm'
import CounterSlice from './component/CounterSlice'
import FakeStore from './component/FakeStore'
import Pretics from './component/Pretics'
import Layout from './component/Layout'



function App() {

  return (

    <>

      {<Routes>
        <Route path='*' element={<DefaulPage />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<ProtectRoute>
            <ProductCard />
          </ProtectRoute>} />

          <Route path='/about' element={
            <ProtectRoute>
              <Fetchapi />
            </ProtectRoute>} />
          <Route path='/multifrom' element={<MultipleFrom />
          } />
          <Route path='/feedback' element={<FeedBack />
          } />
          <Route path='/weather' element={<Weather />
          } />
          <Route path='/todo' element={<Todo />
          } />
          <Route path='/moodDiary' element={<MoodDiary />
          } />
          <Route path='/useform' element={<UseForm />
          } />
          <Route path='/counter' element={<CounterSlice />
          } />
          <Route path='/fakestore' element={<FakeStore />
          } />
          <Route path='/Form' element={<Form />} />
          <Route path='/detail/:id' element={<Details />} />
        </Route>
      </Routes>}






    </>
  )
}

export default App
