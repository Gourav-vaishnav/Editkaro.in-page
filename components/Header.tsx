
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-start h-20">
          <div className="flex items-center space-x-3">
            <svg
              className="w-10 h-10 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.55a2.5 2.5 0 010 4.09l-4.55 2.55A2.5 2.5 0 0113 18.2V5.8a2.5 2.5 0 012-2.39zM5 4v16"
              ></path>
            </svg>
            <span className="text-2xl font-bold text-white">Editkaro.in</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
