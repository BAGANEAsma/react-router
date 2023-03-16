import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import About from './About'
import Menu from './Menu'
import Profil from './Profil'

function App() {
  return ( 
    <div>
    <NavLink to={"profil"}>profil</NavLink> 
    <NavLink to={"about"}>about</NavLink> 
    <NavLink to={"menu"}>menu</NavLink> 
    <Routes>
<Route path='profil' element={<Profil></Profil>}></Route>
<Route path='about' element={<About></About>}></Route>
<Route path='menu' element={<Menu></Menu>}></Route>

    </Routes>
    </div>
  )
}

export default App
