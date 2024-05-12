import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/Navbar/Footer';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    return (
            <div>
                <Navbar isLoggedIn={isLoggedIn} />
                <MainRoutes/>
                <Footer/>
            </div>
    );
}

export default App;
