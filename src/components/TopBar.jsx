import React, { useState, useEffect } from 'react';

const TopBar = () => {
  // Contact information
  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'contact@eternitycoders.com'
  };

  // Social media links
  const socialLinks = [
    { name: 'facebook', url: '#facebook', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z' },
    { name: 'twitter', url: '#twitter', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z' },
    { name: 'linkedin', url: '#linkedin', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' },
    { name: 'instagram', url: '#instagram', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 14.748c-.08 1.067-.358 1.725-.762 2.137-.406.413-1.062.691-2.13.771-1.066.08-1.422.1-4.174.1-2.751 0-3.107-.02-4.174-.1-1.067-.08-1.724-.358-2.13-.771-.404-.412-.682-1.07-.762-2.137-.08-1.067-.1-1.422-.1-4.174 0-2.752.02-3.107.1-4.174.08-1.067.358-1.724.762-2.13.406-.413 1.063-.692 2.13-.772 1.067-.08 1.422-.1 4.174-.1 2.752 0 3.107.02 4.174.1 1.068.08 1.724.359 2.13.772.404.406.682 1.063.762 2.13.08 1.067.1 1.422.1 4.174 0 2.752-.02 3.107-.1 4.174z' }
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Initial check on component mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`bg-black text-white py-1 fixed w-full z-20 border-b border-gray-800 hidden sm:block transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ position: 'fixed', top: 0 }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            {/* Phone */}
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center hover:text-[#ff4d00] transition-colors duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">{contactInfo.phone}</span>
            </a>
            
            {/* Email */}
            <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-[#ff4d00] transition-colors duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">{contactInfo.email}</span>
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff4d00] transition-colors duration-300"
                aria-label={`Follow us on ${social.name}`}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;