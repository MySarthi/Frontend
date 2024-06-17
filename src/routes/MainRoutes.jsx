// React Library Import 
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// Pages Import 

import DiscoverIndia from '../pages/DiscoverIndia/DiscoverIndia';
import BookSlot from '../pages/BookSlot/BookSlot';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import HeroSection from '../components/HeroSection';

const MainRoutes = () => {
  return (
    <Routes> 
        <Route path='/' element ={<HeroSection/> } />
        <Route path="/discover-india" element={<DiscoverIndia/>} /> 
        <Route path="/book-slot" element={<BookSlot/>} /> 
        <Route path="/about" element={<AboutUs/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
    </Routes>
  )
}

export default MainRoutes