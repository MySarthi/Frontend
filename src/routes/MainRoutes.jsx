// React Library Import 
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// Pages Import 
import HeroSection from '../components/HeroSection';
import DiscoverIndia from '../pages/DiscoverIndia'; 
import BookSlot from '../pages/BookSlot'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'

const MainRoutes = () => {
  return (
    <Routes> 
        <Route path="/" element={<HeroSection />} /> 
        <Route path="/discover-india" element={<DiscoverIndia />} /> 
        <Route path="/book-slot" element={< BookSlot/>} /> 
        <Route path="/about" element={< AboutUs/>} /> 
        <Route path="/contact" element={< ContactUs/>} /> 
    </Routes>
  )
}

export default MainRoutes