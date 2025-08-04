import React from 'react';

const Technologies = () => {
  const techStacks = [
    {
      category: 'Frontend',
      techs: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Ruby']
    },
    {
      category: 'Mobile',
      techs: ['React Native', 'Flutter', 'iOS', 'Android', 'Kotlin', 'Swift']
    },
    {
      category: 'Database',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Oracle']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build modern, scalable, and robust applications
            that meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {stack.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {stack.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-lg font-medium transform hover:-translate-y-0.5">
            View All Technologies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies; 