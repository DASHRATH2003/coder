import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      number: "350+",
      label: "PROJECT DONE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZc-ZOjKgMWPj5Sxq6zo-XQBHKgrLjtASt8Q&s"
    },
    {
      number: "4.7",
      label: "CUSTOMER RATING",
      image: "https://static.vecteezy.com/system/resources/previews/024/380/732/non_2x/customer-review-icon-quality-rating-five-stars-on-black-background-vector.jpg"
    },
    {
      number: "300+",
      label: "CUSTOMERS",
      image: "https://www.pngfind.com/pngs/m/680-6800038_customer-icon-png-transparent-png.png"
    }
  ];

  return (
    <section className="bg-[#f8f6f3] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 relative">
          OUR ACHIEVEMENTS IN NUMBERS
          <span className="absolute -top-2 -right-2 w-4 h-4">
            <span className="absolute top-0 right-0 w-full h-0.5 bg-[#ff4d00]"></span>
            <span className="absolute top-0 right-0 w-0.5 h-full bg-[#ff4d00]"></span>
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative">
              {/* Number with curly braces */}
              <div className="text-[#ff4d00] text-6xl md:text-7xl lg:text-8xl font-bold mb-4 relative">
                <span className="absolute -left-6 text-9xl opacity-20">{`{`}</span>
                {achievement.number}
                <span className="absolute -right-6 text-9xl opacity-20">{`}`}</span>
              </div>
              
              {/* Label */}
              <div className="text-xl font-bold text-gray-800">
                {achievement.label}
              </div>

              {/* Image */}
              <div className="mt-6 relative">
                <img 
                  src={achievement.image} 
                  alt={achievement.label}
                  className="w-32 h-32 object-cover rounded-lg shadow-lg"
                />
                {/* Orange square decoration */}
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#ff4d00]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 