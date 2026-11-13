import React from 'react';
import { GitHubIcon, XIcon } from './Icons';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Find Me Online</h2>
      </div>
      <div className="contact-links">
        <a href="https://github.com/MitchellHayes" target="_blank" rel="noreferrer" className="btn contact-details">
          <GitHubIcon size={26} />
          <span>GitHub</span>
        </a>
        <a href="https://x.com/MLHayes95" target="_blank" rel="noreferrer" className="btn contact-details">
          <XIcon size={24} />
          <span>X</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
