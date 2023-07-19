import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">Some of my projects</h2>
      <div className="projects-grid">
        <a href="https://mitchellhayes.github.io/coffee-app/" target="_blank" rel="noreferrer" className="project project-tile">
          <img className="project-image" src="./assets/media/coffeeApp.PNG" alt="Coffee App Project" />
          <p className="project-title">Coffee App</p>
        </a>
        <a href="https://mitchellhayes.github.io/calculator/" target="_blank" rel="noreferrer"  className="project project-tile">
          <img className="project-image" src="./assets/media/calculator.PNG" alt="Calculator Project" />
          <p className="project-title">Pure HTML, CSS & JS Calculator</p>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
