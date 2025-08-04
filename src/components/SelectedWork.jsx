import React, { useRef, useEffect } from 'react';

const SelectedWork = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout;
    let isScrollingHorizontally = false;

    const handleScroll = () => {
      if (!scrollRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollRef.current;
      const containerRect = container.getBoundingClientRect();
      const scrollTop = window.pageYOffset;
      
      // Only activate when section is in view
      if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
        const scrollProgress = Math.max(0, Math.min(1, 
          (window.innerHeight - containerRect.top) / (window.innerHeight + containerRect.height)
        ));

        // Calculate horizontal scroll amount
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const targetScroll = maxScroll * scrollProgress;

        // Smooth scroll horizontally
        scrollContainer.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });

        // Lock vertical scroll while showing full image
        if (scrollProgress > 0 && scrollProgress < 1) {
          const targetScrollTop = container.offsetTop - window.innerHeight + 
            (window.innerHeight + container.offsetHeight) * scrollProgress;
          
          if (Math.abs(scrollTop - lastScrollTop) > 50) {
            window.scrollTo(0, targetScrollTop);
          }
        }
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      number: "01",
      name: "Number Dekho",
      type: "WEB & APP DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=870&h=600"
    },
    {
      number: "02",
      name: "Broopi",
      type: "WEB & APP DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=870&h=600"
    },
    {
      number: "03",
      name: "Starstell",
      type: "WEB & APP DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=870&h=600"
    },
    {
      number: "04",
      name: "Magicfinserv",
      type: "E-COMMERCE PLATFORM DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=870&h=600"
    }
  ];

  return (
    <section ref={containerRef} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
      </div>

      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden"
        >
          <div className="flex gap-8 px-4 min-w-max">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative w-[800px] group"
              >
                {/* Project Image */}
                <div className="relative h-[500px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Orange Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#ff4d00] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-500"></div>
                  
                  {/* Project Info - Shows on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-3xl font-bold mb-2">{project.name}</h3>
                      <p className="text-white/80">{project.type}</p>
                      <button className="mt-6 px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-[#ff4d00] transition-colors duration-300">
                        VIEW PROJECT
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute top-6 left-6 bg-[#ff4d00] text-white p-4 z-10">
                  <span className="text-2xl font-bold">
                    {`{${project.number}}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reduced space for scrolling */}
      <div className="h-[10vh]"></div>
    </section>
  );
};

export default SelectedWork; 