import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverIndia from './components/DiscoverIndia'; 
import BookSlot from './components/BookSlot'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {
    const isLoggedIn = false; 
    return (
        <Router>
            <div>
                <Navbar isLoggedIn={isLoggedIn} />
                <Routes> 
                    <Route path="/" element={<HeroSection />} /> 
                    <Route path="/discover-india" element={<DiscoverIndia />} /> 
                    <Route path="/book-slot" element={< BookSlot/>} /> 
                    <Route path="/about" element={< AboutUs/>} /> 
                    <Route path="/contact" element={< ContactUs/>} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
