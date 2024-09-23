import React, { useState } from 'react';

// skills data
const skillsData = [
  {
    "SkillID": 1,
    "Title": "Computer Repair and Maintenance",
    "Description": "Proficient in diagnosing hardware and software issues, performing repairs, and upgrading components to optimize system performance. Skilled in troubleshooting issues with motherboards, processors, hard drives, RAM, and peripherals."
  },
  {
    "SkillID": 2,
    "Title": "Customer Support",
    "Description": "Experienced in providing exceptional technical support for customers, resolving issues through troubleshooting, and guiding clients through complex software and hardware solutions. Adept at explaining technical details to non-technical users."
  },
  {
    "SkillID": 3,
    "Title": "Network Protocols and Implementation",
    "Description": "Knowledgeable in implementing and troubleshooting network protocols such as TCP/IP, DHCP, DNS, and HTTP. Capable of setting up and managing local area networks (LAN), wireless networks, and virtual private networks (VPNs) for secure communication."
  },
  {
    "SkillID": 4,
    "Title": "Software Installation and Configuration",
    "Description": "Expert in installing and configuring operating systems, applications, and software tools. Skilled in both Windows and Linux environments, ensuring system compatibility and optimal performance."
  },
  {
    "SkillID": 5,
    "Title": "Security and Data Protection",
    "Description": "Experienced in setting up firewalls, antivirus software, and other security protocols to protect systems and networks from unauthorized access, malware, and data breaches."
  }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkill = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold tracking-wide text-center mb-8 text-oceanLight">
        Skills
      </h2>
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={skill.SkillID}>
            <button
              onClick={() => toggleSkill(index)}
              className="w-full text-left bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <h3 className="text-2xl font-semibold text-oceanBlue">{skill.Title}</h3>
              <span className="text-oceanBlue">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>

            {/* Show the skill description only if the skill is active */}
            {activeIndex === index && (
              <div className="p-4 text-gray-600 bg-white rounded-lg shadow-inner mt-2">
                <p>{skill.Description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
