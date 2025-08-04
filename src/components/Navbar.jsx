import React, { useState, useEffect } from 'react';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-5' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src={logo}
                alt="" 
                className="h-20 w-40 transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium hover:text-[#ff4d00] transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#ff4d00] text-white px-10 py-4 text-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium hover:text-[#ff4d00] transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#ff4d00] text-white px-10 py-4 text-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300 w-full">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Gradient Overlay for transparent navbar */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent -z-10"></div>
      )}
    </nav>
  );
};

export default Navbar; 