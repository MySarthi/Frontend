import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-blue-500 p-8 h-screen flex items-center justify-center">
            <div className="text-white text-center">
                <h1 className="text-3xl font-bold">Welcome to</h1>
                <div className="h-4"></div> {/* Add some space */}
                <div className="h-12 animate-welcome flex flex-col items-center justify-center">
                    <div>MySarthi</div> {/* Use a CSS animation class */}
                </div>
                <div className="h-4"></div> {/* Add some space */}
                {/* Add other content here */}
            </div>
        </div>
    );
}

export default HeroSection;
