import React from 'react';
import profileImage from '../assets/profile.jpg'; 

const Header = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Name, Title, and Contact Information */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-black">Norman Kenya</h1>
          <p className="text-xl font-medium text-gray-600 mt-2">
            Full-Stack JavaScript Developer | React & Node.js Specialist
          </p>
          <p className="text-gray-500 mt-4">
            Passionate about building secure web applications with a strong emphasis on microservices architecture and API development for scalable, efficient, and modular systems.
            <br />
            Skilled in React, Node.js, and modern web technologies.
          </p>

          {/* Contact Information */}
          <div className="mt-6 text-gray-600 space-y-2">
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope text-gray-500"></i>
              <p className="text-lg font-medium">normane7@icloud.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-gray-500"></i>
              <p className="text-lg font-medium">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="mt-6 md:mt-0">
          <img 
            src={profileImage} 
            alt="Profile"
            className="rounded-full w-40 h-40 object-cover shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
