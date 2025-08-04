import React from 'react';

const Industries = () => {
  const industries = [
    { name: 'HEALTHCARE' },
    { name: 'FINANCE' },
    { name: 'ED-TECH' },
    { name: 'MANUFACTURING' },
    { name: 'TECHNOLOGY & TELECOM' },
    { name: 'REAL ESTATE' },
    { name: 'E-COMMERCE' },
    { name: 'LOGISTICS' },
    { name: 'FIN-TECH' },
    { name: 'GOV & NON PROFIT' },
    { name: 'TRAVEL & TOURSIM' },
    { name: 'MEDIA SPORT' }
  ];

  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          Industries we Serve
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative bg-[#111] hover:bg-[#ff4d00] transition-colors duration-500 p-12 cursor-pointer"
            >
              {/* Star Icon */}
              <div className="absolute top-8 left-8">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-[#ff4d00] group-hover:text-white transition-colors duration-500">
                      <path 
                        fill="currentColor" 
                        d="M12,0 L14,8 L22,8 L16,14 L18,22 L12,18 L6,22 L8,14 L2,8 L10,8 Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Industry Name */}
              <div className="mt-16">
                <p className="text-[#ff4d00] group-hover:text-white transition-colors duration-500">
                  {`{${industry.name}}`}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-white transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-white transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries; 