import React from 'react';

const WhyMariox = () => {
  const cards = [
    {
      title: "Certified Professional & Experts",
      description: "Being a certified and experienced Mobile App and Website Development agency in India, we have a team of certified experts who are highly skilled in their league."
    },
    {
      title: "We're fast, Accurate & Reliable",
      description: "Investing in a company to maximize a business's growth is one of the huge intangible decisions one can make. But Mariox Software Pvt. Ltd. has been a trustworthy destination for all its consumers"
    },
    {
      title: "We support you round the clock",
      description: "We understand you might have doubts while investing in a company handing over your brand harness to maximize its worth. As a responsible Mobile App and Website Development Company in Noida"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-6 relative">
            WHY MARIOX
            <span className="absolute -top-1 -right-4 w-3 h-3 bg-[#ff4d00]"></span>
          </h2>
          <p className="text-2xl font-medium text-gray-800">
            WE BLEND EXPERTISE, INNOVATION, COLLABORATION,<br />
            AND RESULTS SEAMLESSLY.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-[#ff4d00] p-8 text-white min-h-[400px] flex flex-col"
            >
              <h3 className="text-2xl font-medium mb-8">
                {card.title}
              </h3>
              <p className="mt-auto text-white/90">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMariox; 