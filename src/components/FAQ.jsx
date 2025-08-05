import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "What types of businesses can gain value from your mobile app solutions ?",
      answer: "At Ethernity Coders, we offer cutting-edge mobile app development services that empower businesses to thrive in a technology-driven world. Our team builds reliable and scalable applications tailored for various industries, including healthcare (telemedicine, patient records), finance, retail, e-commerce (online stores, virtual marketplaces), and education (learning management systems, mobile learning apps). By delivering feature-rich solutions, we help businesses boost efficiency, streamline operations, and stay competitive in the digital era."
    },
    {
      question: "What Is the Estimated Cost of Building a Web Application?",
      answer: "The cost varies based on the app's complexity, features, and overall scope. For an accurate estimate tailored to your specific needs, feel free to contact us for a detailed quote."
    },
    {
      question: "What Technologies and Frameworks Are Commonly Used in Web App Development?",
      answer: "We use modern frameworks like React, Angular, Node.js, and other cutting-edge technologies."
    },
    {
      question: "Is it Affordable to Build an App or Website?",
      answer: "Yes, we offer competitive pricing and flexible packages to suit different budgets."
    },
    {
      question: "How do you proceed with mobile app development?",
      answer: "We follow a systematic approach: Planning, Design, Development, Testing, and Deployment."
    },
    {
      question: "Can your mobile app development company assist with both web and mobile app development for my business?",
      answer: "Yes, we provide comprehensive solutions for both web and mobile platforms."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-5xl font-bold">
            Frequently<br />
            asked questions
          </h2>
          <span className="text-[#ff4d00] text-8xl">?</span>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
              >
                <span className="text-lg font-medium text-gray-900 hover:text-[#ff4d00] transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {openQuestion === index ? (
                    <span className="text-[#ff4d00] text-2xl">−</span>
                  ) : (
                    <span className="text-gray-400 text-2xl">+</span>
                  )}
                </span>
              </button>
              
              {openQuestion === index && (
                <div className="pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 