
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')", filter: 'blur(5px) brightness(0.4)'}}></div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block">We Edit.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">You Trend.</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-lg sm:text-xl text-gray-300">
                From viral shorts to cinematic masterpieces, we craft videos that captivate, engage, and convert. Your vision, edited to perfection.
            </p>
        </div>
    </div>
  );
};

export default Hero;
