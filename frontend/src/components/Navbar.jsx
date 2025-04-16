import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-black-100 font-bold text-3xl">EasyHomes.</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
          <Link to="/" className="relative text-gray-500 hover:text-black transition-colors duration-300 group">
            Home
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="relative text-gray-500 hover:text-black transition-colors duration-300 group">
            Projects
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative text-gray-500 hover:text-black transition-colors duration-300 group">
             About
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="relative text-gray-500 hover:text-black transition-colors duration-300 group">
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-black group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="block text-black group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="block text-black group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="block text-black group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 