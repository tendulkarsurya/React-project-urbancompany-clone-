import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Nav2 from './Components/Nav/Nav2'
import "./App.css"
import Contactus from './Components/Contactus/Contactus'
import Services from './Components/Services/Services'
import About from './Components/Aboutus/About'
import ACservicing from './Components/Home/ComponentNavigation/AC_Servicing/ACservicing'
import WeddingGlow from './Components/Home/ComponentNavigation/WeddingGlow/WeddingGlow'
import Bathroom from './Components/Home/ComponentNavigation/Bathroom/BathRoomServicing'
import Lock from './Components/Home/ComponentNavigation/Lock/LockMain'
import Massage from './Components/Home/ComponentNavigation/Massage/MassageMain'
import Ro from './Components/Home/ComponentNavigation/RO/RoMain'
import Wall from './Components/Home/ComponentNavigation/Wall/WallMain'
import Cart from './Components/Home/ComponentNavigation/Cart'
import RightNavigation from './Components/Home/ComponentNavigation/RightNavigation'
import Welcome from './Components/Welcome/Welcome'
import OrderSummary from './Components/Home/ComponentNavigation/Order/OrderSummary'
import ServiceNavigation from './Components/Services/Components/ServiceNavigation/ServiceNavigation'
const App = () => {

  let [popup,showpopup] = useState(false)
  return (
    <BrowserRouter>
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home datapop = {popup} />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />

        <Route path='/ACservicing' element={<ACservicing/>} />
        <Route path='/Bathroom' element={<Bathroom />} />
        <Route path='/Lock' element={<Lock/>} />
        <Route path='/Massage' element={<Massage/>} />
        <Route path='/Ro' element={<Ro/>} />
        <Route path='/Wall' element={<Wall/>} />
        <Route path='/WeddingGlow' element={<WeddingGlow/>}></Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/OrderSummary' element={<OrderSummary/>} />
        
        <Route path='/ServiceNavigation' element={<ServiceNavigation  datapop={showpopup} />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App