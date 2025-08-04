import React, { useState, useRef, useEffect } from 'react';

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState('MOBILE');
  const techGridRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  const tabs = ['MOBILE', 'FRONTEND', 'BACKEND', 'CMS'];

  const technologies = {
    MOBILE: [
      {
        name: 'Android',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg'
      },
      {
        name: 'React Native',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Kotlin',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
      },
      {
        name: 'Swift',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
      },
      {
        name: 'Flutter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
      }
    ],
    FRONTEND: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Vue',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
      },
      {
        name: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
      },
      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      {
        name: 'Next JS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekH-E30i07lW0GIe0fzowYnZbXK5RP6-0Wg&s'
      }
    ],
    BACKEND: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        name: 'Ruby',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'
      },
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
      },
      {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
      },
      {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
      },
      {
        name: 'Objective C',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg'
      }
    ],
    CMS: [
      {
        name: 'Drupal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg'
      },
      {
        name: 'Magento',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg'
      },
      {
        name: 'Prestashop',
        icon: 'https://cdn-icons-png.flaticon.com/512/825/825533.png'
      },
      {
        name: 'Shopify',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoVGQ6o4d8HVNNjnX2Q7jcOHvZXatci5gkg&s'
      },
      {
        name: 'WordPress',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
      },
      {
        name: 'Wix',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg'
      }
    ]
  };

  return (
    <section ref={sectionRef} className="py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 relative">
          Technologies
          <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
        </h2>
        
        {/* Tabs */}
        <div className="flex space-x-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-4 relative ${
                activeTab === tab 
                  ? 'text-[#ff4d00]' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff4d00]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div ref={techGridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies[activeTab].map((tech, index) => (
            <div 
              key={index}
              className={`bg-[#f5f5f5] p-6 rounded-none flex flex-col items-center justify-center group transition-all duration-500 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-12 h-12"
                />
              </div>
              <p className="text-center text-sm font-medium text-gray-900">
                {tech.name}
              </p>
              {/* Bottom zigzag border */}
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-[url('/zigzag.png')] bg-repeat-x"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;