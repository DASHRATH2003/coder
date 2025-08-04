import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Ideas Into
            <span className="text-[#ff4d00]"> Digital Reality</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            We are a leading software development company specializing in creating innovative digital solutions that help businesses thrive in the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#ff4d00] text-white px-8 py-4 text-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">300+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">50+</h3>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">10+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 