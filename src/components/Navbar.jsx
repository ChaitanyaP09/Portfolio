import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-wider cursor-pointer">
              Chaitanya<span className="text-blue-500">Puranik</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-blue-600 px-3 py-2 text-white rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#skills" className="hover:text-blue-600 px-3 py-2 rounded-md text-white text-sm font-medium transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-600 px-3 py-2 rounded-md text-white text-sm font-medium transition-colors">Projects</a>
              <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;