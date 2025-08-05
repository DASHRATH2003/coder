import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeAboutServices = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 'mobile-app-development',
      icon: (
        <svg className="w-10 h-10 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native & cross-platform solutions for iOS and Android.'
    },
    {
      id: 'web-development',
      icon: (
        <svg className="w-10 h-10 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Responsive web apps with modern frameworks.'
    },
    {
      id: 'ui-ux-design',
      icon: (
        <svg className="w-10 h-10 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Intuitive interfaces with focus on user experience.'
    }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#ff4d00]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-[#ff4d00]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* About Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative mb-6">
              <h2 className="text-3xl md:text-4xl font-bold inline-block">
                About Us
                <span className="absolute -top-1 -right-4 w-2 h-2 bg-[#ff4d00]"></span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#ff4d00] to-transparent mt-2"></div>
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              We are a specialized app development company crafting innovative mobile and web applications that transform businesses.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d00]/20 to-black flex items-center justify-center mr-4">
                  <span className="text-[#ff4d00] font-bold">8+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Years Experience</h4>
                  <p className="text-sm text-gray-400">In app development</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d00]/20 to-black flex items-center justify-center mr-4">
                  <span className="text-[#ff4d00] font-bold">200+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Projects Delivered</h4>
                  <p className="text-sm text-gray-400">Across various industries</p>
                </div>
              </div>
            </div>
            
            <button onClick={() => navigate('/about')} className="flex items-center text-[#ff4d00] hover:text-white group transition-colors duration-300">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Services Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative mb-6">
              <h2 className="text-3xl md:text-4xl font-bold inline-block">
                Our Services
                <span className="absolute -top-1 -right-4 w-2 h-2 bg-[#ff4d00]"></span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#ff4d00] to-transparent mt-2"></div>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  onClick={() => handleServiceClick(service.id)}
                  className="bg-gradient-to-r from-[#111] to-black p-4 rounded-lg border border-[#ff4d00]/20 hover:border-[#ff4d00]/50 transition-all duration-300 flex items-center cursor-pointer group"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff4d00] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-[#ff4d00] transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={() => navigate('/services')} className="mt-6 bg-[#ff4d00] text-white px-6 py-3 rounded-lg hover:bg-[#ff4d00]/90 transition-colors duration-300 flex items-center justify-center w-full">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutServices;