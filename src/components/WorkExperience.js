import React, { useEffect, useState } from 'react';

// JSON-like object for work experience data
const workExperienceData = [
  {
    "WorkID": 1,
    "CompanyName": "encreage",
    "Role": "Lead Developer",
    "StartDate": "2020-01-01",
    "EndDate": "2022-06-01",
    "Description": "Led the development of e-commerce solutions and custom software for various clients.",
    "highlights": [
      "Developed a robust e-commerce platform handling secure transactions and user authentication using JWT and OAuth.",
      "Implemented a custom-built product catalog with sorting, filtering, and search capabilities using SQL and Elasticsearch.",
      "Created a responsive front-end UI with React.js and integrated it with a Node.js/Express API for seamless data flow.",
      "Built an admin dashboard for product management, order tracking, and customer insights using Tailwind CSS and Chart.js.",
      "Optimized application performance, reducing load times by 35% through lazy loading and code-splitting techniques."
    ]
  },
  {
    "WorkID": 2,
    "CompanyName": "Rhythmical",
    "Role": "Software Engineer",
    "StartDate": "2018-04-01",
    "EndDate": "2020-01-01",
    "Description": "Architected and developed a scalable music recommendation engine.",
    "highlights": [
      "Architected a scalable music recommendation engine using collaborative filtering and content-based algorithms, improving user engagement by 20%.",
      "Developed a recommendation pipeline that processed user interaction data in real time using Node.js and WebSockets, providing personalized song suggestions instantly.",
      "Integrated machine learning models using TensorFlow.js to dynamically adjust recommendations based on user listening patterns.",
      "Optimized database queries and indexing strategies in SQL for faster access to large datasets, reducing response times by 30%.",
      "Ensured security compliance for user data by implementing encryption and secure data storage practices, aligning with GDPR regulations."
    ]
  }
];

// Helper function to format the date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    // Simulate fetching data locally from the JSON object
    setWorkExperience(workExperienceData);
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold tracking-wide text-center mb-8 text-oceanLight">
        Work Experience
      </h2>
      <ul className="space-y-6">
        {workExperience.map((work) => (
          <li
            key={work.WorkID}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out"
          >
            {/* Title and Date Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-oceanBlue">
                {work.CompanyName} - {work.Role}
              </h3>
              <span className="text-gray-500">
                {`From: ${formatDate(work.StartDate)} To: ${formatDate(work.EndDate || 'Present')}`}
              </span>
            </div>

            {/* Work Description */}
            <p className="text-gray-600 mb-4">{work.Description}</p>

            {/* Dynamic Highlights */}
            {work.highlights && work.highlights.length > 0 && (
              <ul className="list-disc pl-6 text-gray-500 space-y-2">
                {work.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
