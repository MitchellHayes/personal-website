import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">Some of my projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
