import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import SingleOrder from './components/SingleOrder';
import Service from './components/Service';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

function App() {

  return (
    <div className='bg-gray-900 text-white' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/;id' element={<SingleOrder />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
