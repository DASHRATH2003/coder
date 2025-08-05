import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'mobile-app-development',
      icon: (
        <svg className="w-16 h-16 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Expert mobile app development for iOS and Android platforms using native and cross-platform technologies.',
      features: [
        'Native iOS Development (Swift, SwiftUI)',
        'Native Android Development (Kotlin, Jetpack Compose)',
        'Cross-platform Solutions (React Native, Flutter)',
        'App Store & Play Store Deployment',
        'App Maintenance & Updates',
        'Performance Optimization'
      ]
    },
    {
      id: 'web-development',
      icon: (
        <svg className="w-16 h-16 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Full-stack web development services using cutting-edge technologies and modern frameworks.',
      features: [
        'Responsive Web Applications',
        'Progressive Web Apps (PWA)',
        'Custom CMS Development',
        'E-commerce Solutions',
        'API Development & Integration',
        'Cloud Deployment (AWS, Azure, GCP)'
      ]
    },
    {
      id: 'ui-ux-design',
      icon: (
        <svg className="w-16 h-16 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with focus on user experience and modern design principles.',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'Design System Creation',
        'Mobile & Web App Design',
        'Interactive Prototypes'
      ]
    },
    {
      id: 'digital-transformation',
      icon: (
        <svg className="w-16 h-16 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Digital Transformation',
      description: 'Helping businesses transform digitally with innovative solutions and modern technologies.',
      features: [
        'Business Process Automation',
        'Legacy System Modernization',
        'Cloud Migration Services',
        'Digital Strategy Consulting',
        'IoT Solutions',
        'AI & ML Integration'
      ]
    }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Our Services
            <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            We offer comprehensive development solutions to help businesses thrive in the digital age with innovative and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service.id)}
              className="bg-gradient-to-r from-[#111] to-black p-8 rounded-lg border border-[#ff4d00]/30 hover:border-[#ff4d00]/50 transition-all duration-300 group hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ff4d00] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-[#ff4d00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center text-[#ff4d00] group-hover:text-white transition-colors duration-300">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#ff4d00] text-white px-10 py-4 text-lg font-medium rounded-lg hover:bg-[#ff4d00]/90 transition-colors duration-300">
            Get Started With Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;