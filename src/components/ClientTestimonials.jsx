import React from 'react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      text: "Working with Mariox has been a transformative experience for our company. Their team has been instrumental in guiding our digital strategy and implementing innovative solutions that have significantly improved our business operations.",
      name: "Abhishek Tripathi",
      role: "CEO, TechSolutions Inc."
    },
    {
      text: "My efforts in app development have changed massively thanks to Mariox. They have tremendously sophisticated technologies that I use to streamline campaigns, analyse data, and improve outcomes. I've had great growth and success in my business strategy due to their professional resources and assistance. Highly advisable.",
      name: "Anil Mehta",
      role: "Founder, AppInnovate"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Clients <span className="text-[#ff4d00]">{`{Love}`}</span> us
          </h2>
          <div className="w-24 h-1 bg-[#ff4d00] mx-auto"></div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-10">
                <div className="flex items-start space-x-6">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0 text-[#ff4d00]">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {testimonial.text}
                    </p>
                    <div>
                      <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-[#ff4d00]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;