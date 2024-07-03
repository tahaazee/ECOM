import React from 'react'
import './App.css'
import Navbar from './assets/component/Navbar'
import Home from './assets/component/Home'
import ProductBox from './assets/component/Productbox'
import Conatct from './assets/component/Conatct'

import Login from './assets/component/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Pro from './assets/component/Pro'
import About from './assets/component/About'
import { CartProvider } from './assets/component/CartContext'
import Cart from './assets/component/Cart'

function App() {
    
   
    
    

  return (
    <>
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/about"  element={<About/>} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
