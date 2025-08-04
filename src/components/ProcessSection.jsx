import React, { useRef, useEffect, useState } from 'react';

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if section is visible
      if (scrollPosition > sectionTop - windowHeight/2 && 
          scrollPosition < sectionTop + sectionHeight) {
        setIsVisible(true);
        
        // Calculate which step should be active based on scroll position
        const progress = (scrollPosition - (sectionTop - windowHeight/2)) / (sectionHeight * 0.8);
        const newActiveStep = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setActiveStep(newActiveStep);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const steps = [
    {
      number: "01",
      title: "Client Meeting",
      description: "When our clients reach out to us, we sit with them to comprehensively understand their business module and the motive behind getting an application. We understand what type of application they seek so that our team can craft aptly resonating application development services for them."
    },
    {
      number: "02",
      title: "Strategy and Prototypes",
      description: "After we are done with the client, their project is our responsibility. Our team of developers uses their expertise and brainstorming to find the best application development tools and technologies. Our team prepares a prototype comprised of the complete design and development process."
    },
    {
      number: "03",
      title: "Development and Designing",
      description: "To ensure that the complete website development process has been well-performed and does not leave with any glitches, our testers check out the application's efficiency and overall functionality. Once everything is good, the application is suitable for delivery."
    },
    {
      number: "04",
      title: "Track and Maintenance",
      description: "That's not it! Our services are beyond delivery. We support our clients with post-delivery maintenance and support services where we track application performance results and help with additional benefits."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-gray-900">OUR MOBILE APP</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#ff4d00]">
            DEVELOPMENT PROCESS
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A streamlined approach to transforming your ideas into exceptional mobile experiences
        </p>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-xl shadow-md transition-all duration-500 overflow-hidden border border-gray-100 ${activeStep === index ? 'shadow-lg border-orange-200 scale-[1.02]' : 'shadow-md'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated background element */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-orange-100 blur-3xl"></div>
              </div>
              
              <div className="relative flex flex-col lg:flex-row items-start p-8 lg:p-10 gap-8">
                {/* Number and Title */}
                <div className="w-full lg:w-1/3">
                  <div className="relative flex items-center lg:block">
                    <span className="text-7xl lg:text-8xl font-bold text-gray-100 group-hover:text-orange-50 transition-colors duration-500">
                      {step.number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 absolute lg:relative left-20 lg:left-0 top-1/2 lg:top-auto transform lg:transform-none -translate-y-1/2 lg:translate-y-0 group-hover:text-orange-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full lg:w-2/3 lg:pl-8 relative">
                  {/* Animated vertical line */}
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200">
                    <div className="absolute top-0 left-0 w-full h-0 bg-orange-500 group-hover:h-full transition-all duration-1000 delay-200 origin-top"></div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative pl-6 lg:pl-8">
                    <span className="absolute left-0 top-0 w-1 h-6 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></span>
                    {step.description}
                  </p>

                  {/* Animated corner elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-orange-500 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-orange-500 transition-all duration-300"></div>
                  
                  {/* Step indicator */}
                  <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA at bottom */}
      <div className="max-w-3xl mx-auto mt-20 px-6 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Ready to transform your mobile app idea into reality?
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-[#ff4d00] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          Start Your Project Today
        </button>
      </div>
    </section>
  );
};

export default ProcessSection;