import React, { useEffect, useState } from 'react';

const CaseStudySlider = ({ cases, onCaseClick, activeCase }) => {
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    let interval;
    if (autoScrollEnabled) {
      interval = setInterval(() => {
        const currentIndex = cases.findIndex(c => c.id === activeCase.id);
        const nextIndex = (currentIndex + 1) % cases.length;
        onCaseClick(cases[nextIndex]);
      }, 5000); // Change case every 5 seconds
    }
    return () => clearInterval(interval);
  }, [activeCase, cases, onCaseClick, autoScrollEnabled]);

  const handleMouseEnter = () => {
    setAutoScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoScrollEnabled(true);
  };

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 z-20 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="flex-1 cursor-pointer relative"
              onClick={() => {
                onCaseClick(caseItem);
                setAutoScrollEnabled(false);
                setTimeout(() => setAutoScrollEnabled(true), 10000); // Resume auto-scroll after 10 seconds
              }}
            >
              <div className="px-4 py-5 text-center">
                <h3 className={`text-sm transition-all duration-500 ${
                  activeCase.id === caseItem.id 
                    ? 'text-[#ff4d00] font-medium' 
                    : 'text-gray-600'
                }`}>
                  {caseItem.title}
                </h3>
              </div>
              {/* Active indicator line with animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200">
                <div 
                  className={`h-full bg-[#5829dd] transition-all duration-500 ${
                    activeCase.id === caseItem.id 
                      ? 'w-full' 
                      : 'w-0'
                  }`}
                  style={{
                    animation: activeCase.id === caseItem.id 
                      ? 'lineProgress 5s linear infinite' 
                      : 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes lineProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudySlider; 