import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />

      <main className="container mx-auto py-8 px-4 space-y-10"> {/* Reduced padding and uniform spacing */}
        {/* Projects Section */}
        <section className="py-4"> {/* Consistent section padding */}
          <Projects />
        </section>

        {/* Skills Section */}
        <section className="py-4">
          <Skills />
        </section>

        {/* Work Experience Section */}
        <section className="py-4">
          <WorkExperience />
        </section>

        {/* Education Section */}
        <section className="py-4">
          <Education />
        </section>

        {/* Contact Section */}
        <section className="py-4">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4"> {/* Reduced footer padding */}
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Norman Kenya. All rights reserved.</p>

          <div className="flex justify-center space-x-6 mt-2"> {/* Uniform spacing */}
            <a href="normankenya.github.io" className="hover:text-gray-400" aria-label="Blog">
              <i className="fas fa-blog"></i>
            </a>
            <a href="https://medium.com/@normankenya0" className="hover:text-gray-400" aria-label="Medium">
              <i className="fab fa-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/norman-kenya-b54058295/" className="hover:text-gray-400" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/nrmnkny" className="hover:text-gray-400" aria-label="X (Twitter)">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
