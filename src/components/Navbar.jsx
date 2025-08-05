import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // When scrolled past TopBar height, Navbar background will change
      setIsScrolled(window.scrollY > 20);
      
      // Adjust navbar position based on scroll position
      const navbarElement = document.querySelector('nav');
      if (navbarElement) {
        navbarElement.style.top = window.scrollY > 32 ? '0px' : '32px';
      }
    };
    
    // Initial check on component mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    
    // Initial check on component mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);
    
    if (path === 'home') {
      navigate('/');
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path === 'about') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === 'services') {
      navigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === 'contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'HOME', href: 'home' },
    { name: 'ABOUT', href: 'about' },
    { name: 'SERVICES', href: 'services' },
    { name: 'CONTACT US', href: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-black via-gray-900 to-black shadow-lg py-2' 
          : 'bg-transparent py-2'
      }`}
      style={{ 
        position: 'fixed', 
        top: isScrolled ? '0' : '32px',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              onClick={() => handleNavigation('home')}
              className="flex items-center cursor-pointer"
            >
              <img 
                src={logo}
                alt="" 
                className="h-16 w-32 sm:h-20 sm:w-40 transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={`text-lg font-medium hover:text-[#ff4d00] transition-colors duration-300 cursor-pointer text-white ${
                  (link.href === 'about' && location.pathname === '/about') ||
                  (link.href === 'home' && location.pathname === '/') ||
                  (link.href === 'services' && location.pathname.startsWith('/services'))
                    ? 'text-[#ff4d00]'
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#ff4d00] text-white px-10 py-4 text-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300 rounded-md">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white hover:text-[#ff4d00] transition-colors duration-300"
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
          <div className="md:hidden mt-4 pb-4 bg-black/95 absolute left-0 right-0 px-6 py-4 border-b border-gray-800 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-lg font-medium hover:text-[#ff4d00] transition-colors duration-300 cursor-pointer text-white ${
                    (link.href === 'about' && location.pathname === '/about') ||
                    (link.href === 'home' && location.pathname === '/') ||
                    (link.href === 'services' && location.pathname.startsWith('/services'))
                      ? 'text-[#ff4d00]'
                      : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#ff4d00] text-white px-6 py-3 text-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300 w-full rounded-md">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Gradient Overlay for transparent navbar */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent -z-10"></div>
      )}
    </nav>
  );
};

export default Navbar;