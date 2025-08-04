import React, { useRef, useEffect, useState } from 'react';

const Services = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isScrolling) return;
      
      const scrollContainer = scrollRef.current;
      const scrollPosition = window.scrollY;
      const containerTop = scrollContainer.offsetTop;
      const containerHeight = scrollContainer.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate when the section is in view
      if (scrollPosition > containerTop - windowHeight/1.5 && 
          scrollPosition < containerTop + containerHeight) {
        const progress = (scrollPosition - (containerTop - windowHeight/1.5)) / ((containerHeight + windowHeight/1.5) * 0.8);
        const maxIndex = services.length - 1;
        const newIndex = Math.min(Math.floor(progress * services.length), maxIndex);
        
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
          setIsScrolling(true);
          
          // Smooth scroll to the card
          const cardWidth = 400; // Width of each card including gap
          const scrollAmount = newIndex * cardWidth;
          
          scrollContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          });
          
          // Reset scrolling state after animation completes
          setTimeout(() => setIsScrolling(false), 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, isScrolling]);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "App development",
      description: "As a proficient App Development Company, we are known for providing high-quality experience with our built apps on different portable devices. We understand the true potential of an app and its benefits to flourish your business. Developing an app that depicts your vision",
      bgColor: "bg-[#f5f5f5]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "Design your first impression exaltedly! What if you get a beautifully designed website that attracts clients in the first blink? Why go anywhere when Mariox is here? We are an excellent Web development company where our experts create enthralling websites for your business, ensuring your users have.",
      bgColor: "bg-[#ff4d00]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Android App Development",
      description: "Experience the true potential of an Android app with our Android app development services, where our professionals tailor the app as per your needs, delivering outstanding results that will nourish your consumers with a seamless and innovative mobile app experience.",
      bgColor: "bg-[#f5f5f5]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "iOS App Development",
      description: "At Mariox Software, we specialize in crafting custom mobile applications tailored to your unique vision and business needs. Our team of experienced developers works closely with you to conceptualize, design, and develop high-quality mobile apps that resonate with your target audience.",
      bgColor: "bg-[#f5f5f5]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "E-commerce",
      description: "Your products need to be more visible and have a better appearance on digital platforms. We secure your trust with the best e-commerce App development services, offering your consumers a thrilling and influential experience.",
      bgColor: "bg-[#f5f5f5]"
    }
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 relative">
          OUR SERVICES
          <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
        </h2>
      </div>

      {/* Services Slider */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-4 min-w-max">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${service.bgColor} p-8 transition-transform duration-300 ${activeIndex === index ? '-translate-y-2' : ''} w-[300px] sm:w-[400px] snap-center`}
              >
                {/* Icon with star design */}
                <div className="mb-6">
                  <div className="relative">
                    {service.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 transform rotate-45">
                          <div className={`w-0.5 h-full ${service.bgColor === 'bg-[#ff4d00]' ? 'bg-white' : 'bg-[#ff4d00]'} mx-auto`}></div>
                          <div className={`w-full h-0.5 ${service.bgColor === 'bg-[#ff4d00]' ? 'bg-white' : 'bg-[#ff4d00]'} my-auto`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl sm:text-2xl font-medium mb-4 ${service.bgColor === 'bg-[#ff4d00]' ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm sm:text-base ${service.bgColor === 'bg-[#ff4d00]' ? 'text-white/90' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {services.map((_, index) => (
            <div 
              key={index} 
              className={`w-8 h-1 transition-all duration-300 ${activeIndex === index ? 'w-16 bg-[#ff4d00]' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Add some space for scrolling */}
      <div className="h-[20vh]"></div>
    </section>
  );
};

export default Services;