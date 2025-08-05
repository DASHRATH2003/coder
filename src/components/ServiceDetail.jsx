import React from 'react';
import { useParams } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    'mobile-app-development': {
      title: 'Mobile App Development',
      description: 'Expert mobile app development services for iOS and Android platforms',
      mainImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3',
      features: [
        'Native iOS Development (Swift, SwiftUI)',
        'Native Android Development (Kotlin, Jetpack Compose)',
        'Cross-platform Solutions (React Native, Flutter)',
        'App Store & Play Store Deployment',
        'App Maintenance & Updates',
        'Performance Optimization'
      ],
      technologies: [
        'Swift & SwiftUI',
        'Kotlin & Jetpack Compose',
        'React Native',
        'Flutter',
        'Firebase',
        'AWS Mobile Services'
      ],
      process: [
        {
          title: 'Discovery & Planning',
          description: 'We analyze your requirements and create a detailed project roadmap.'
        },
        {
          title: 'UI/UX Design',
          description: 'Creating intuitive and engaging user interfaces for your app.'
        },
        {
          title: 'Development',
          description: 'Building your app using the latest technologies and best practices.'
        },
        {
          title: 'Testing & QA',
          description: 'Rigorous testing to ensure your app works flawlessly.'
        },
        {
          title: 'Deployment',
          description: 'Publishing your app to the App Store and Play Store.'
        },
        {
          title: 'Maintenance & Support',
          description: 'Ongoing support and updates to keep your app running smoothly.'
        }
      ]
    },
    'web-development': {
      title: 'Web Development',
      description: 'Full-stack web development services using modern technologies',
      mainImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3',
      features: [
        'Responsive Web Applications',
        'Progressive Web Apps (PWA)',
        'Custom CMS Development',
        'E-commerce Solutions',
        'API Development & Integration',
        'Cloud Deployment'
      ],
      technologies: [
        'React.js',
        'Node.js',
        'Next.js',
        'MongoDB',
        'AWS',
        'Docker'
      ],
      process: [
        {
          title: 'Requirements Analysis',
          description: 'Understanding your needs and planning the solution.'
        },
        {
          title: 'Architecture Design',
          description: 'Designing scalable and maintainable architecture.'
        },
        {
          title: 'Frontend Development',
          description: 'Building responsive and interactive user interfaces.'
        },
        {
          title: 'Backend Development',
          description: 'Creating robust and secure server-side solutions.'
        },
        {
          title: 'Testing',
          description: 'Comprehensive testing across devices and browsers.'
        },
        {
          title: 'Deployment & Monitoring',
          description: 'Deploying and maintaining your web application.'
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
      mainImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'Design System Creation',
        'Mobile & Web App Design',
        'Interactive Prototypes'
      ],
      technologies: [
        'Figma',
        'Adobe XD',
        'Sketch',
        'InVision',
        'Principle',
        'Zeplin'
      ],
      process: [
        {
          title: 'Research',
          description: 'Understanding users and market analysis.'
        },
        {
          title: 'Wireframing',
          description: 'Creating low-fidelity layouts and user flows.'
        },
        {
          title: 'UI Design',
          description: 'Designing beautiful and consistent interfaces.'
        },
        {
          title: 'Prototyping',
          description: 'Building interactive prototypes for testing.'
        },
        {
          title: 'User Testing',
          description: 'Validating designs with real users.'
        },
        {
          title: 'Handoff',
          description: 'Preparing designs for development.'
        }
      ]
    },
    'digital-transformation': {
      title: 'Digital Transformation',
      description: 'Modernizing businesses with innovative digital solutions',
      mainImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
      features: [
        'Business Process Automation',
        'Legacy System Modernization',
        'Cloud Migration Services',
        'Digital Strategy Consulting',
        'IoT Solutions',
        'AI & ML Integration'
      ],
      technologies: [
        'Cloud Platforms',
        'AI/ML Tools',
        'IoT Platforms',
        'Automation Tools',
        'Analytics Tools',
        'Integration Platforms'
      ],
      process: [
        {
          title: 'Assessment',
          description: 'Evaluating current systems and processes.'
        },
        {
          title: 'Strategy',
          description: 'Developing a comprehensive digital strategy.'
        },
        {
          title: 'Planning',
          description: 'Creating detailed transformation roadmap.'
        },
        {
          title: 'Implementation',
          description: 'Executing the transformation plan.'
        },
        {
          title: 'Training',
          description: 'Training teams on new systems and processes.'
        },
        {
          title: 'Optimization',
          description: 'Continuous improvement and optimization.'
        }
      ]
    }
  };

  const service = services[serviceId];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              {service.title}
              <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              {service.description}
            </p>
          </div>

          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden mb-20">
            <img 
              src={service.mainImage}
              alt={service.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-[#ff4d00]/30 hover:border-[#ff4d00]/50 transition-all duration-300"
              >
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#ff4d00] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {service.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg text-center border border-[#ff4d00]/30"
                >
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-[#ff4d00]/30 hover:border-[#ff4d00]/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#ff4d00] text-white flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <button className="bg-[#ff4d00] text-white px-10 py-4 text-lg font-medium rounded-lg hover:bg-[#ff4d00]/90 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;