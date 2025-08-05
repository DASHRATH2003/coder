import React, { useState } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Mobile App Development',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const services = [
    'Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'Cross-Platform App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Transformation',
    'Cloud Services',
    'Custom Software Development'
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'contact@eternitycoders.com',
      link: 'mailto:contact@eternitycoders.com'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: '123 Tech Hub, Innovation Street, Digital City, 12345',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* App Development Services Banner */}
          <div className="bg-gradient-to-r from-[#ff4d00]/20 to-black p-6 rounded-lg border border-[#ff4d00]/30 mb-16">
            <h3 className="text-2xl font-bold mb-4">Our App Development Expertise</h3>
            <p className="text-gray-300 mb-4">
              We specialize in creating powerful, user-friendly mobile applications that drive business growth. Our app development services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#ff4d00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Native iOS & Android Apps</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#ff4d00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cross-Platform Solutions</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#ff4d00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#ff4d00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>App Maintenance & Support</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#ff4d00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>API Integration</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#ff4d00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>App Store Optimization</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                Contact Us
                <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
                Ready to transform your ideas into reality? Get in touch with us for a free consultation on your app development needs. Our expert team specializes in creating cutting-edge mobile applications for iOS and Android platforms that help businesses thrive in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg border border-[#ff4d00]/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                      >
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff4d00] text-white py-4 rounded-lg font-medium hover:bg-[#ff4d00]/90 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="block bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-[#ff4d00]/30 hover:border-[#ff4d00]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </div>
                  </a>
                ))}

                {/* Social Links */}
                <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-[#ff4d00]/30">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff4d00] transition-colors duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;