import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Find Me Online</h2>
      </div>
      <div className="contact-links">
        <a id="profile-link" href="https://github.com/MitchellHayes" target="_blank" rel="noreferrer" className="btn contact-details">
          <i className="fab fa-github"></i>GitHub
        </a>
        <a id="profile-link" href="https://twitter.com/MLHayes95" target="_blank" rel="noreferrer" className="btn contact-details">
          <i className="fab fa-twitter"></i>Twitter
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
