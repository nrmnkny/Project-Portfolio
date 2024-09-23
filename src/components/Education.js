import React, { useState } from 'react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-3xl font-bold tracking-wide text-center mb-6 text-black"> {/* Consistent font sizes */}
        Education
      </h2>
      <ul className="space-y-2">
        {/* University Education */}
        <li className="bg-white border border-gray-200 shadow-sm rounded-lg">
          <button
            className="w-full text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-t-lg flex justify-between items-center"
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="text-lg font-semibold text-black">Maasai Mara University</h3>
            <span className="text-black">
              {activeIndex === 1 ? '-' : '+'}
            </span>
          </button>

          {activeIndex === 1 && (
            <div className="p-3 text-gray-700">
              <p className="text-sm text-gray-600">Bachelor's degree, Computer Science</p>
              <p className="text-xs text-gray-500">Sep 2014 - May 2019</p>
              <p className="mt-1 text-sm">
                <strong>Activities and Societies:</strong> Computer Science Club
              </p>
              <p className="mt-1 text-sm">
                Linear Algebra, Probability Theory, System Design, Computer Repair, Computer Networking, Web Content Writing, Software Engineering
              </p>
            </div>
          )}
        </li>

        {/* High School Education */}
        <li className="bg-white border border-gray-200 shadow-sm rounded-lg">
          <button
            className="w-full text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-t-lg flex justify-between items-center"
            onClick={() => toggleAccordion(2)}
          >
            <h3 className="text-lg font-semibold text-black">Saint Joseph’s Boys Kitale</h3>
            <span className="text-black">
              {activeIndex === 2 ? '-' : '+'}
            </span>
          </button>

          {activeIndex === 2 && (
            <div className="p-3 text-gray-700">
              <p className="text-sm text-gray-600">High School Diploma</p>
              <p className="text-xs text-gray-500">Feb 2010 - Nov 2013</p>
              <p className="mt-1 text-sm">
                <strong>Activities and Societies:</strong> Science Club, Music Society, Computer Club
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Education;
