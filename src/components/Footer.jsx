import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    interests: []
  });

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const services = [
    'Android App Development',
    'iOS App Development',
    'Flutter App Development',
    'E-Commerce App Development',
    'Website Development',
    'PHP Development',
    'CMS Development'
  ];

  const quickLinks = [
    { title: 'ABOUT US', link: '#' },
    { title: 'CONTACT US', link: '#' },
    { title: 'CAREERS', link: '#' },
    { title: 'T&C', link: '#' }
  ];

  const socialLinks = [
    { title: 'FACEBOOK', link: '#' },
    { title: 'INSTAGRAM', link: '#' },
    { title: 'LINKEDIN', link: '#' },
    { title: 'YOUTUBE', link: '#' },
    { title: 'TWITTER', link: '#' }
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Interests */}
            <div className="mb-8">
              <p className="text-sm mb-4">Interested In</p>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'App Development', 'CMS', 'Ecommerce', 'Other'].map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-2 text-sm border ${
                      formData.interests.includes(interest)
                        ? 'bg-[#ff4d00] border-[#ff4d00]'
                        : 'border-white hover:border-[#ff4d00]'
                    } transition-colors duration-300`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border-b border-gray-600 py-2 focus:border-[#ff4d00] outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-gray-600 py-2 focus:border-[#ff4d00] outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="flex border-b border-gray-600 focus-within:border-[#ff4d00] transition-colors">
                <select className="bg-transparent py-2 pr-2 outline-none">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="bg-transparent py-2 flex-1 outline-none"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="bg-transparent border-b border-gray-600 py-2 focus:border-[#ff4d00] outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#ff4d00] text-white px-8 py-3 hover:bg-[#ff4d00]/90 transition-colors duration-300"
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800 pt-10">
          {/* Quick Links */}
          <div>
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                className="block text-sm mb-4 hover:text-[#ff4d00] transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            {services.map((service) => (
              <a
                key={service}
                href="#"
                className="block text-sm mb-4 hover:text-[#ff4d00] transition-colors duration-300"
              >
                {service}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Head Office</h3>
              <p className="text-sm text-gray-400">
                502, Ayodhya Business Chambers,<br />
                Near Parimal Jn,<br />
                Noida, Uttar Pradesh 201301
              </p>
            </div>

            <div>
              <a href="tel:+919999285045" className="text-sm hover:text-[#ff4d00] transition-colors duration-300">
                +91 9999285045
              </a>
            </div>

            <div>
              <a href="mailto:admin@marioxsoftware.com" className="text-sm hover:text-[#ff4d00] transition-colors duration-300">
                admin@marioxsoftware.com
              </a>
            </div>

            <div className="text-sm text-gray-400">
              Best Website and Mobile App Development Company
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-10 pt-10">
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.link}
                className="text-sm hover:text-[#ff4d00] transition-colors duration-300"
              >
                {social.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 