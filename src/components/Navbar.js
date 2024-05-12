import React from 'react';

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white font-bold flex">
                    <a href="/" className="text-white">MySarthi</a>
                    <a href="/discover-india" className="ml-4 text-white">Discover India</a>
                    <a href="/book-slot" className="ml-4 text-white">Book Slot</a>
                </div>
                <div className="space-x-4 flex">
                    <input type="text" placeholder="Search" className="px-2 py-1 rounded-md bg-gray-700 text-white focus:outline-none" />
                    <a href="about" className="text-white">About Us</a>
                    <div className="h-6 w-0.5 bg-white mx-2"></div>
                    <a href="contact" className="text-white">Contact Us</a>
                    <a href="sign-in" className="text-white">Sign In</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
