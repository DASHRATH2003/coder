import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
    // Show success message or notification here
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  const services = [
    'Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'Cross-Platform App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Transformation',
    'Cloud Services',
    'Custom Software Development'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ), url: '#' },
    { name: 'Twitter', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ), url: '#' },
    { name: 'LinkedIn', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ), url: '#' },
    { name: 'Instagram', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ), url: '#' },
    { name: 'GitHub', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ), url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Footer Wave Separator */}
      <div className="relative">
        <svg className="w-full h-12 sm:h-20 text-black fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Subscription */}
        <div className="mb-16 bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl border border-[#ff4d00]/30 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">Stay updated with our latest news, projects, and tech insights.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full sm:w-64 bg-gray-900 border border-gray-700 rounded-l-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors mb-2 sm:mb-0"
                required
              />
              <button
                type="submit"
                className="bg-[#ff4d00] text-white px-6 py-3 rounded-r-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              Eternity Coders
              <span className="absolute -top-1 -right-4 w-2 h-2 bg-[#ff4d00] rounded-full"></span>
            </h4>
            <p className="text-gray-300">
              We are a leading software development company specializing in creating innovative digital solutions, with a strong focus on mobile app development for iOS and Android platforms.
            </p>
            <div className="pt-4">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff4d00] transition-all duration-300 transform hover:scale-110"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -top-1 -right-4 w-2 h-2 bg-[#ff4d00] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index} className="transform hover:translate-x-2 transition-transform duration-300">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('/services');
                    }}
                    className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -top-1 -right-4 w-2 h-2 bg-[#ff4d00] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/about');
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Portfolio
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/contact');
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Careers
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -top-1 -right-4 w-2 h-2 bg-[#ff4d00] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#ff4d00] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">2nd Floor, Akshay Complex,No. 01, 16th Main Rd, near Bharat Petroleum, BTM 2nd Stage, Bengaluru,Karnataka 560076</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#ff4d00] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+15551234567" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                    window.location.href = 'tel:+15551234567';
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#ff4d00] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:contact@eternitycoders.com" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                    window.location.href = 'mailto:contact@eternitycoders.com';
                  }}
                  className="text-gray-300 hover:text-[#ff4d00] transition-colors duration-300"
                >
                  contact@eternitycoders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Eternity Coders. All rights reserved.</p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-gray-400 hover:text-[#ff4d00] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-gray-400 hover:text-[#ff4d00] transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-gray-400 hover:text-[#ff4d00] transition-colors duration-300 text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;