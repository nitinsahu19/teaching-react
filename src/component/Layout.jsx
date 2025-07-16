import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Foter from './Foter'

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
      <Outlet/>
      </main>
      <footer>
        <Foter/>
      </footer>
    </div>
  )
}

export default MainLayout
