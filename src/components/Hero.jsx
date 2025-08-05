import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-12 md:pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 mt-4 md:mt-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 text-gray-400">
            Transform Your Ideas Into
            <span className="text-[#ff4d00] block sm:inline"> Digital Reality</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            We are a leading software development company specializing in creating innovative digital solutions that help businesses thrive in the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-[#ff4d00] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300 w-full sm:w-auto">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-yellow-500">500+</h3>
              <p className="text-sm sm:text-base text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-yellow-500">300+</h3>
              <p className="text-sm sm:text-base text-gray-400">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-yellow-500">50+</h3>
              <p className="text-sm sm:text-base text-gray-400">Team Members</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-yellow-500">10+</h3>
              <p className="text-sm sm:text-base text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;