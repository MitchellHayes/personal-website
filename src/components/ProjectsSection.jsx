import React from 'react';

const styles = {
  projectsSection: {
    textAlign: 'center',
    padding: '10rem 2rem',
    background: '#45567d',
  },
  projectsSectionHeader: {
    maxWidth: '640px',
    margin: '0 auto 6rem auto',
    borderBottom: '0.2rem solid #f0f0f0',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gridGap: '4rem',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    marginBottom: '6rem',
  },
  project: {
    background: '#303841',
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    borderRadius: '2px',
  },
  projectImage: {
    height: 'calc(100% - 6.8rem)',
    width: '100%',
    objectFit: 'cover',
  },
  projectTitle: {
    fontSize: '2rem',
    padding: '2rem 0.5rem',
  },
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="Projects" style={styles.projectsSection}>
      <h2 style={styles.projectsSectionHeader}>Some of my projects</h2>
      <div style={styles.projectsGrid}>
        <a href="https://mitchellhayes.github.io/coffee-app/" target="_blank" rel="noreferrer" style={styles.project}>
          <img style={styles.projectImage} src="./assets/media/coffeeApp.PNG" alt="Coffee App Project" />
          <p style={styles.projectTitle}>Coffee App</p>
        </a>
        <a href="https://mitchellhayes.github.io/calculator/" target="_blank" rel="noreferrer" style={styles.project}>
          <img style={styles.projectImage} src="./assets/media/calculator.PNG" alt="Calculator Project" />
          <p style={styles.projectTitle}>Pure HTML, CSS & JS Calculator</p>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
