import React, { useRef, useEffect, useState } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import AchievementsSection from './AchievementsSection';
import SelectedWork from './SelectedWork';
import Industries from './Industries';
import WhyMariox from './WhyMariox';
import ClientTestimonials from './ClientTestimonials';
import FAQ from './FAQ';
import Footer from './Footer';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const teamMembers = [
    {
      name: 'Rakesh',
      position: 'Chief Executive Officer',
      image: ' https://i.postimg.cc/Y01jrM3p/add.png',
     
      bio: 'A CEO leads the company by setting long-term goals, building strong leadership teams, and making key strategic decisions. They act as the face of the organization, representing it to investors, stakeholders, and the public, while ensuring smooth day-to-day operations and sustainable growth.'
    },
    {
      name: 'Ashok Bonga',
      position: 'Senior Product Engineer',
      image: 'https://www.innomatricstech.com/static/media/profile.fc807f3ffb3de8149fa7.jpeg',

      bio: 'Priya specializes in native iOS and Android development, ensuring our mobile apps deliver exceptional performance and user experience.'
    },
    {
      name: 'Dashrath yadav',
      position: 'Full Stack Developer',
      image: ' https://avatars.githubusercontent.com/u/118556564?v=4  ',
      bio: 'Backed by over 2 years of hands-on experience in web and mobile development, this role focuses on delivering robust, scalable, and user-focused digital solutions.'
    },
    {
      name: 'Sathish G',
      position: 'App Developer ',
      image: 'https://i.postimg.cc/G3BF0DnQ/sathis.jpg',
     
      bio: 'Neha transforms client visions into successful app products, focusing on market fit and user-centered development approaches.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <Navbar />
      <section id="about" ref={sectionRef} className="pt-20 md:pt-32 pb-16 md:pb-20 bg-gray-800 text-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
              About Us
              <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              We are a specialized app development company crafting innovative mobile and web applications that transform businesses and enhance user experiences.
            </p>
          </div>

          {/* Company Story */}
          <div className={`flex flex-col md:flex-row items-center gap-12 mb-20 transition-all duration-1000 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff4d00]">Our Expertise</h3>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Since 2015, we've been at the forefront of mobile and web app development, delivering cutting-edge solutions across various platforms. Our expertise spans native iOS and Android development, cross-platform solutions, and progressive web applications.
              </p>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                We specialize in building scalable, secure, and feature-rich applications that leverage the latest technologies including React Native, Flutter, Swift, Kotlin, and modern web frameworks. Our solutions incorporate advanced features like real-time synchronization, offline capabilities, and seamless cloud integration.
              </p>
              <p className="text-base md:text-lg text-gray-300">
                With a track record of delivering over 200+ successful apps and maintaining a 98% client satisfaction rate, we're committed to turning your app ideas into market-ready solutions that drive real business value.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-gradient-to-r from-gray-900 to-black p-4 shadow-xl rounded-lg transform hover:-rotate-2 transition-transform duration-500 border border-[#ff4d00]/30">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="App development team collaboration" 
                  className="w-full h-auto rounded-lg opacity-90"
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-[#ff4d00] rounded-lg transform translate-x-4 translate-y-4 -z-10 opacity-50"></div>
            </div>
          </div>

          {/* Our Values */}
          <div className={`mb-20 transition-all duration-1000 delay-300 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#ff4d00]">Our Development Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'Agile Development',
                  description: 'We follow an agile methodology with rapid prototyping, continuous integration, and regular client feedback to ensure your app evolves with market needs.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  ),
                  title: 'User-Centered Design',
                  description: 'Every feature and interface element is crafted with your users in mind, ensuring intuitive navigation and engaging experiences.'
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Quality Assurance',
                  description: 'Rigorous testing across devices and platforms ensures your app performs flawlessly under real-world conditions.'
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-[#111] to-black p-4 md:p-8 shadow-lg rounded-lg border border-[#ff4d00]/30 hover:shadow-xl transition-all duration-300 hover:border-[#ff4d00]/50"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="mb-6">{value.icon}</div>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-white">{value.title}</h4>
                  <p className="text-sm md:text-base text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className={`transition-all duration-1000 delay-500 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#ff4d00]">Our App Development Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-[#111] to-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#ff4d00]/30 hover:border-[#ff4d00]/50"
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-48 md:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                      <p className="text-gray-300 text-xs md:text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-[#ff4d00] font-medium">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <AchievementsSection />
      <SelectedWork />
      <Industries />
      <WhyMariox />
      <ClientTestimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutUs;