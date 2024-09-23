import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold tracking-wide text-center mb-8 text-oceanLight">
        Projects
      </h2>
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.ProjectID} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-oceanBlue">{project.Title}</h3>
            <p className="text-gray-600 mb-4">{project.Description}</p>
            <a 
              href={project.Link} 
              className="text-oceanLight hover:text-oceanBlue hover:underline transition duration-300 ease-in-out" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
